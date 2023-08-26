import { Component, OnDestroy } from '@angular/core';
import { ListItem, Item, aListItem, aItem, aNamed, Category } from 'src/app/shared/models/item';
import { StorageService } from 'src/app/shared/services/storage.service';
import { faPenToSquare, faTrash, faSpinner, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { DocumentReference, getDoc } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnDestroy {
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faSpinner = faSpinner;
  faCartPlus = faCartPlus;

  listItems: Array<ListItem> = [];
  itemDefs: Array<Item> = [];
  categories: Array<Category> = [];
  units: Array<string> = [];
  loading = false;
  lockUnitAndCategory = false;

  subscriptions: Array<Subscription> = [];

  addFormGroup: FormGroup = new FormGroup({
    numControl: new FormControl(1),
    unitControl: new FormControl(),
    typeControl: new FormControl(),
    categoryControl: new FormControl(),
    onSaleControl: new FormControl(false)
  });

  constructor(
    private storageService: StorageService
  ) {
    this.subscriptions.push(this.storageService.listItems.subscribe(async (aListItems: Array<aListItem>) => {
      this.loading = true;
      this.listItems = await this.populateListItems(aListItems);
      this.loading = false;
    }));

    this.subscriptions.push(this.storageService.itemDefs.subscribe(async (aItemDefs: Array<aItem>) => {
      this.itemDefs = await this.populateItems(aItemDefs);
    }));

    this.subscriptions.push(this.storageService.categories.subscribe((categories: Array<Category>) => {
      this.categories = categories.sort((a: Category, b: Category) => a.sortIndex - b.sortIndex);

      if (!this.addFormGroup.controls['categoryControl'].value) {
        this.addFormGroup.controls['categoryControl'].patchValue(this.categories[0].name);
      }
    }));

    this.subscriptions.push(this.storageService.units.subscribe(async (aNamed: Array<aNamed>) => {
      this.units = await this.populateNamed(aNamed);

      if (!this.addFormGroup.controls['unitControl'].value) {
        this.addFormGroup.controls['unitControl'].patchValue(this.units.find(unit => unit === "Stück") ?? this.units[0]);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    const selectedItem = this.itemDefs.find(item => item.name === value);

    if (selectedItem) {
      // select unit and category
      this.lockUnitAndCategory = true;
      this.addFormGroup.controls['unitControl'].patchValue(selectedItem.unit);
      this.addFormGroup.controls['categoryControl'].patchValue(selectedItem.category);
    } else {
      this.lockUnitAndCategory = false;
    }
    this.setDisabled(this.addFormGroup.controls['unitControl'], this.lockUnitAndCategory);
    this.setDisabled(this.addFormGroup.controls['categoryControl'], this.lockUnitAndCategory);
  }

  addItem() {
    // Figure out if the item already exists and the user wants to update the number of items
    const existingListItem = this.listItems.find(listItem => {
      return listItem.type!.name?.toLowerCase() === this.addFormGroup.controls['typeControl'].value.toLowerCase()
    });

    const newListItem: ListItem = {
      num: this.addFormGroup.controls['numControl'].value,
      type: {
        name: this.addFormGroup.controls['typeControl'].value,
        category: this.addFormGroup.controls['categoryControl'].value,
        unit: this.addFormGroup.controls['unitControl'].value
      } as Item,
      onSale: this.addFormGroup.controls['onSaleControl'].value
    }
    if (existingListItem) {
      newListItem.num! += existingListItem.num!;
      this.storageService.updateItemNum(newListItem);
    } else {
      this.storageService.addItem(newListItem, !this.lockUnitAndCategory);
    }

    // Reset forms
    this.addFormGroup.controls['typeControl'].patchValue('');
    this.addFormGroup.controls['numControl'].patchValue(1);
  }

  deleteItem(listItem: ListItem) {
    this.storageService.deleteItem(listItem);
  }

  async populateListItems(aListItems: Array<aListItem>): Promise<Array<ListItem>> {
    return Promise.all(aListItems.map<Promise<ListItem>>(async item => {
      const num = item.num;
      const onSale = item.onSale;

      const atype = item.type;
      let type = undefined;

      if (atype) {
        const typeData = (await getDoc<aItem>(atype)).data();

        if (typeData) {
          const name = typeData.name;
          const aCategory = typeData.category;
          const aUnit = typeData.unit;
          let category = undefined;
          let unit = undefined;

          if (aCategory) {
            category = (await getDoc<aNamed>(aCategory)).data()?.name;
          }

          if (aUnit) {
            unit = (await getDoc<aNamed>(aUnit)).data()?.name;
          }

          type = {
            name: name,
            category: category,
            unit: unit
          }
        }
      }

      return {
        type: type,
        num: num,
        onSale: onSale
      }
    }));
  }

  async populateItems(aItemDefs: Array<aItem>): Promise<Array<Item>> {
    return Promise.all(aItemDefs.map<Promise<Item>>(async (aItemDef: aItem) => {
      const name = aItemDef.name;
      let category = undefined;
      let unit = undefined;

      const aCategory = aItemDef.category;
      if (aCategory) {
        category = (await getDoc<aNamed>(aCategory)).data()?.name;
      }

      const aUnit = aItemDef.unit;
      if (aUnit) {
        unit = (await getDoc<aNamed>(aUnit)).data()?.name;
      }

      return {
        name: name,
        category: category,
        unit: unit
      };
    }));
  }

  async populateNamed(aNamed: Array<aNamed>): Promise<Array<string>> {
    return Promise.all(aNamed.map<Promise<string>>(async (aNamed: aNamed) => {
      return aNamed?.name ?? '';
    }));
  }

  private setDisabled(control: AbstractControl, disabled: boolean) {
    if (disabled) {
      control.disable();
    } else {
      control.enable();
    }
  }
}
