import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import UserModel from '../user.model';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  users: UserModel[] = [];
  user: UserModel = { user_type: '', user_name: '', email: '', password: '', phone: '', country: '', state: '', city: '', zipcode: ''};
  showAdd: boolean = false;

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
          alert('User added successfully!');          
          this.router.navigate(['admin/user/list']);
        },
        (error) => {
          console.error('Error creating user:', error);
          alert('An error occurred while adding the user. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }

  isFormValid(): boolean {
    return  this.user.user_type!.trim() !== '' &&
            this.user.user_name!.trim() !== '' &&
            this.user.email!.trim() !== '' &&
            this.user.password!.trim() !== '' &&
            this.user.phone!.trim() !== '' &&
            this.user.country!.trim() !== '' &&
            this.user.state!.trim() !== '' &&
            this.user.city!.trim() !== '' &&
            this.user.zipcode!.trim() !== '';
  }
}
