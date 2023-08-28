import { Component, Input } from '@angular/core';
import { faCalendarMinus, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

export enum WeekDay {
  Montag = 'Montag',
  Dienstag = 'Dienstag',
  Mittwoch = 'Mittwoch',
  Donnerstag = 'Donnerstag',
  Freitag = 'Freitag',
  Samstag = 'Samstag',
  Sonntag = 'Sonntag'
}

@Component({
  selector: 'week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss']
})
export class WeekDayComponent {
  private _done = false;

  faCalendarMinus = faCalendarMinus;
  faCalendarPlus = faCalendarPlus;

  @Input()
  weekday: WeekDay = WeekDay.Montag;

  @Input()
  recipe: string = 'Leer'

  @Input()
  link?: string;

  @Input()
  get done() { return this._done; }

  set done(value: any) {
    this._done = this.coerceBooleanProperty(value);
  }

  onClick() {
    this.done = !this.done;
  }

  coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }
}
