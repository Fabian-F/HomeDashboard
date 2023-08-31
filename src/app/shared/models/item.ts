import { DocumentReference } from "@angular/fire/firestore";

export interface aItem {
  name?: string,
  unit?: DocumentReference,
  category?: DocumentReference,
}

export interface aListItem {
  type?: DocumentReference<aItem>,
  num?: number,
  onSale?: boolean
}

export interface Item {
  name?: string,
  unit?: string,
  category?: string,
}

export interface ListItem {
  type?: Item,
  num?: number,
  onSale?: boolean
}

export interface Category {
  name: string,
  sortIndex: number
}

export interface Unit {
  name: string,
  abbreviation: string
}

export interface aNamed {
  name?: string
}
