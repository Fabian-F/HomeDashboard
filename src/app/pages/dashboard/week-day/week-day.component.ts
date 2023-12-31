import { Component, HostListener, Input } from '@angular/core';
import { faCalendarMinus, faCalendarPlus, faLink } from '@fortawesome/free-solid-svg-icons';

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
  private _link: string | null = null;
  private mouseDownTime: number | undefined;
  private isTouchMove = false;
  linkDomain: string | null = null;
  activeStyle = false;

  faCalendarMinus = faCalendarMinus;
  faCalendarPlus = faCalendarPlus;
  faLink = faLink;

  @Input()
  weekday: WeekDay = WeekDay.Montag;

  @Input()
  recipe: string = 'Leer'

  @Input()
  set link(value: string | null) {
    if (!value) {
      this._link = null;
      this.linkDomain = null;
      return;
    }
    this.linkDomain = this.extractDomain(value);
    if (this.linkDomain) {
      this._link = value;
    }
  }

  get link(): string | null {
    return this._link;
  }

  @Input()
  get done() { return this._done; }

  set done(value: any) {
    this._done = this.coerceBooleanProperty(value);
  }

  onClick() {
    this.done = !this.done;
  }

  onMouseDown(event: MouseEvent) {
    console.log("mousedown");
    //if (event.cancelable) event.preventDefault();
    if (event.target instanceof HTMLAnchorElement) return;
    this.mouseDownTime = Date.now();
    this.isTouchMove = false;
    setTimeout(() => {
      if (!this.isTouchMove && this.mouseDownTime) this.activeStyle = true;
    }, 50);
  }

  @HostListener('document:touchmove')
  onTouchMove(event: TouchEvent) {
    this.isTouchMove = true;
    this.activeStyle = false;
  }

  onMouseUp(event: MouseEvent) {
    if (this.isTouchMove) return;
    if (event.cancelable) event.preventDefault();
    this.activeStyle = false;
    const mouseUpTime = Date.now();
    const timeDiff = mouseUpTime - this.mouseDownTime!;
    this.mouseDownTime = undefined;
    if (timeDiff > 200) {
      if (this.link) {
        window.open(this.link, "_blank");
      }
    } else {
      this.onClick();
    }
  }

  extractDomain(link: string): string | null {
    try {
        const url = new URL(link);
        let domain = url.hostname;

        if (domain.startsWith("www.")) {
          domain = domain.slice(4);
      }

      return domain;
    } catch (error) {
        return null;
    }
  }

  coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }
}
