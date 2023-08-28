import { Component } from '@angular/core';
import { WeekDay } from './week-day/week-day.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  WeekDay = WeekDay;
  WeekDayValues = Object.values(WeekDay);

  dragging: string | undefined = undefined;

  dragStart(event: DragEvent, item: string) {
    this.dragging = item;
  }

  dragEnd() {
    this.dragging = undefined;
  }

  drop(event: DragEvent) {

  }
}
