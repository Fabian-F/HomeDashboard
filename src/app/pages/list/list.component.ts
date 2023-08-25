import { Component } from '@angular/core';
import { ListItem } from 'src/app/shared/models/listitem';
import { Unit } from 'src/app/shared/models/unit';
import { StorageService } from 'src/app/shared/services/storage.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  list: Array<ListItem> = [
    {
      num: 2,
      type: {
        name: "Brot",
        unit: Unit.Stück,
        category: 'Gebäck',
      },
      onSale: false
    },
    {
      num: 8,
      type: {
        name: "Toast",
        unit: Unit.Stück,
        category: 'Gebäck',
      },
      onSale: true
    }
  ];

  constructor(
  ) { }

  deleteItem(item: ListItem) {
    const index = this.list.indexOf(item);
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  editItem(item: ListItem) {

  }
}
