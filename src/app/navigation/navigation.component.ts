import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faHouse = faHouse;
  faUser = faUser;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  userAction(): void {
    if (this.authService.isLoggedIn) {
      this.authService.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }

}
