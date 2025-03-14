import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Store the JWT token in localStorage
        this.authService.setToken(response.token);
        this.router.navigate(['/admin/dashboard']);  // Navigate to another page after successful login
      },
      (error) => {
        this.errorMessage = error.error.message || 'Login failed';
      }
    );
  }
}