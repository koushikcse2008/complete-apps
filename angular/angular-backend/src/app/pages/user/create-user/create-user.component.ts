import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import UserModel from '../user.model';
import { AlertComponent } from '../../../shared/components/alert/alert.component';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, AlertComponent, RouterModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})

export class CreateUserComponent {
  users: UserModel[] = [];
  user: UserModel = { user_type: 'user', user_name: '', email: '', password: '', phone: '', country: '', state: '', city: '', zipcode: ''};
  showAdd: boolean = false;

  alertDetails = { type: '', message: '' };
  showAlert = false;

  constructor (
    private router: Router, 
    private userService: UserService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Create User List");
  }

  addUser(): void {
    if (this.isFormValid()) {  
      this.userService.createUser(this.user).subscribe(
        (data) => {          
          this.user = { user_type: '', user_name: '', email: '' }; 
          this.alertDetails = { type: 'success', message: "User added successfully!" };
          this.showAlert = true;
          //alert('User added successfully!');          
          //this.router.navigate(['admin/user/list']);
        },
        (error) => {
          console.error('Error creating user:', error);
          //alert('An error occurred while adding the user. Please try again.');
          this.alertDetails = { type: 'error', message: error };
          this.showAlert = true;
        }
      );
    } else {
      //alert('Please fill in all required fields');
      this.alertDetails = { type: 'error', message: "Please fill in all required fields" };
      this.showAlert = true;
    }
  }

  isFormValid(): boolean {
    return  this.user.user_name!.trim() !== '' &&
            this.user.email!.trim() !== '' &&
            this.user.password!.trim() !== '' &&
            this.user.phone!.trim() !== '' &&
            this.user.country!.trim() !== '' &&
            this.user.state!.trim() !== '' &&
            this.user.city!.trim() !== '' &&
            this.user.zipcode!.trim() !== '';
  }

  closeAlert() {
    this.showAlert = false;
  }
}
