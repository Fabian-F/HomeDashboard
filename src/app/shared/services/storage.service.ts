import { Injectable } from '@angular/core';
import { DocumentReference, Firestore, addDoc, collection, collectionData, doc, deleteDoc, setDoc, query, where, getDocs, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category, Item, ListItem, aItem, aListItem, aNamed } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  listItems: Observable<aListItem[]>;
  itemDefs: Observable<aItem[]>;
  categories: Observable<Category[]>;
  units: Observable<aNamed[]>;

  constructor(
    private firestore: Firestore
  ) {
    const listItemsCollection = collection(this.firestore, 'listItems');
    this.listItems = collectionData(listItemsCollection) as Observable<aListItem[]>;

    const itemDefsCollection = collection(this.firestore, 'itemDefs');
    this.itemDefs = collectionData(itemDefsCollection) as Observable<aItem[]>;

    const categoriesCollection = collection(this.firestore, 'categories');
    this.categories = collectionData(categoriesCollection) as Observable<Category[]>;

    const unitCollection = collection(this.firestore, 'units');
    this.units = collectionData(unitCollection) as Observable<aNamed[]>;
  }

  async addItem(listItem: ListItem, newItemDef: boolean) {
    const itemDefsCollection = collection(this.firestore, 'itemDefs');
    let itemDefRef: DocumentReference<aItem> = doc(itemDefsCollection, listItem.type!.name!.toLowerCase());

    if (newItemDef) {
      const categoriesCollection = collection(this.firestore, 'categories');
      const unitCollection = collection(this.firestore, 'units');

      const aItemDef: aItem = {
        name: this.capitalizeFirstLetter(listItem.type!.name!),
        category: doc(categoriesCollection, listItem.type!.category?.toLowerCase()),
        unit: doc(unitCollection, listItem.type!.unit?.toLowerCase()),
      };
      itemDefRef = doc(itemDefsCollection, listItem.type!.name!.toLowerCase());
      setDoc<aItem>(itemDefRef, aItemDef);
    }

    const listItemsCollection = collection(this.firestore, 'listItems');
    const aListItem: aListItem = {
      num: listItem.num,
      onSale: listItem.onSale,
      type: itemDefRef
    }
    addDoc(listItemsCollection, aListItem);
  }

  async updateItemNum(listItem: ListItem) {
    const listItemsCollection = collection(this.firestore, 'listItems');
    const itemDefsCollection = collection(this.firestore, 'itemDefs');

    const itemDefRef = doc(itemDefsCollection, listItem.type!.name!.toLowerCase());
    const listItemRefQuery = query(listItemsCollection, where("type", "==", itemDefRef));

    const querySnapshot = await getDocs(listItemRefQuery);
    if (querySnapshot.size > 1) {
      console.error("Found duplicate Entries. Updating every entry...")
    }
    querySnapshot.forEach(queryDoc => {
      const listItemRef = doc(listItemsCollection, queryDoc.id);
      console.log("Updating num of: ", listItemRef);
      updateDoc(listItemRef, {num: listItem.num});
    });
  }

  async deleteItem(listItem: ListItem) {
    const listItemsCollection = collection(this.firestore, 'listItems');
    const itemDefsCollection = collection(this.firestore, 'itemDefs');

    const itemDefRef = doc(itemDefsCollection, listItem.type!.name!.toLowerCase());
    const listItemRefQuery = query(listItemsCollection, where("type", "==", itemDefRef));

    const querySnapshot = await getDocs(listItemRefQuery);
    if (querySnapshot.size > 1) {
      console.error("Found duplicate Entries. Deleting every entry...")
    }
    querySnapshot.forEach(queryDoc => {
      const listItemRef = doc(listItemsCollection, queryDoc.id);
      console.log("Deleting: ", listItemRef);
      deleteDoc(listItemRef);
    });
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
