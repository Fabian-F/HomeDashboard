import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { faHouse, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faHouse = faHouse;
  faUser = faUser;
  faBars = faBars;

  linkMenuCheckboxValue = false;

  @ViewChild('linkMenu')
  linkMenu: ElementRef<HTMLDivElement> | undefined;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.router.events.subscribe(() => {
      this.linkMenuCheckboxValue = false;
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.linkMenu) return;
    if(!this.linkMenu.nativeElement.contains(event.target)) {
      this.linkMenuCheckboxValue = false;
    }
  }

  userAction(): void {
    if (this.authService.isLoggedIn) {
      this.authService.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }

}
