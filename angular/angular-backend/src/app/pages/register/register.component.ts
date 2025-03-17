import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from './register.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import UserModel from '../register/register.model';
import { ToastrService } from 'ngx-toastr';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})
export class RegisterComponent {

  users: UserModel[] = [];
  user: UserModel = { user_type: 'user', user_name: '', email: '', password: '', phone: '', country: '', state: '', city: '', zipcode: '', status: 'active'};
  showAdd: boolean = false;

  constructor (
    private router: Router, 
    private registerService: RegisterService,
    private toastr: ToastrService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Create User List");
  }


  onRegister() {
    if (this.isFormValid()) {  
      this.registerService.createUser(this.user).subscribe(
        (data) => {          
          this.user = { user_name: '', email: '', password: '' }; 
          setTimeout(() => {
            this.toastr.success('Successfully registered. Please login!', 'Success!', { closeButton: true, positionClass: 'toast-top-center'});     
          }, 2000);     
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error creating user:', error);
          this.toastr.error('An error occurred while adding the user. Please try again.', 'Error!', { closeButton: true, positionClass: 'toast-top-center'});
        }
      );
    } else {
      this.toastr.error('Please fill in all required fields', 'Error!', { closeButton: true, positionClass: 'toast-top-center'});
    }
  }

  isFormValid(): boolean {
    return  this.user.user_name!.trim() !== '' &&
            this.user.email!.trim() !== '' &&
            this.user.password!.trim() !== '';
  }

}
