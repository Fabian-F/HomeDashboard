import { Item } from "./item";
import { Unit } from "./unit";

export interface ListItem {
  type: Item,
  num: number,
  onSale: boolean
}
