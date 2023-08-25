import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  emailSent = false;

  email = new FormControl('', {
    validators: [
      Validators.required,
      Validators.email
    ]
  });

  constructor(
    private authService: AuthService
  ) { }

  send(): void {
    if (this.email.valid) {
      this.authService.forgotPassword(this.email.value!);
      this.emailSent = true;
    }
  }
}
