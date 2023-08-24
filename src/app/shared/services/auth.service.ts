import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from './user';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject<User | null>(null);

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public ngZone: NgZone,
    public router: Router
  ) {
    if (localStorage.getItem('user')) {
      this.userData.next(JSON.parse(localStorage.getItem('user')!));
    }
    // Saving user data in localstorage when logged in and setting up null when logged out
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData.next(user);
        localStorage.setItem('user', JSON.stringify(this.userData.value));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData.next(null);
      this.router.navigate(['login']);
    })
  }

  forgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox!');
      })
      .catch(error => {
        window.alert(error);
      })
  }
}
