import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import UserModel from '../register/register.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  user: UserModel = { email: '', password: ''};

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {}

  onLogin() {
    if (this.isFormValid()) {
      this.authService.login(this.user?.email!, this.user?.password!).subscribe(
        (response) => {
          // Store the JWT token in localStorage
          this.authService.setToken(response.token);
          this.router.navigate(['/admin/dashboard']);  // Navigate to another page after successful login
        },
        (error) => {
          this.errorMessage = error.error.message || 'Login failed';
        }
      );
    } else {
      this.toastr.error('Please fill in all required fields', 'Error!', { closeButton: true, positionClass: 'toast-top-center'});
    }
  }

  isFormValid(): boolean {
    return  this.user.email!.trim() !== '' &&
            this.user.password!.trim() !== '';
  }

}