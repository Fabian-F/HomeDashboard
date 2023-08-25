import { Injectable, OnDestroy } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  userSubscription: Subscription;
  currentUser: User | null = null;

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    this.userSubscription = authState(auth).subscribe((aUser: User | null) => {
      this.currentUser = aUser;
      if (aUser === null) {
        this.router.navigate(['login']);
      }
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  forgotPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  get isLoggedIn() {
    return this.currentUser !== null;
  }
}
