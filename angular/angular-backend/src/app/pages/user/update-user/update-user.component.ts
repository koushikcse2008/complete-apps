import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import UserModel from "../user.model";
import { AlertComponent } from '../../../shared/components/alert/alert.component';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-user',
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule, AlertComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
  userId: string = "";
  users: UserModel[] = [];
  user: UserModel = { _id: '', user_type: '', user_name: '', email: '', password: '', phone: '', country: '', state: '', city: '', zipcode: '', status: '' };
  isSubmitting: boolean = false;

  alertDetails = { type: '', message: '' };
  showAlert = false;

  constructor (
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private titleService: Title
  ) {}
  
  ngOnInit(): void {
    this.titleService.setTitle("Update User List");
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.user._id = this.userId;
    //console.log(this.userId);
    this.loadUsers(this.userId);
  }

  loadUsers(id: string): void {
    this.userService.editUsers(id).subscribe((result) => {
      this.user = result.data;
      //console.log(result.data);
    });
  }

  updateUser(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.userService.updateUser(this.userId!, this.user).subscribe(
        (data) => {
          this.isSubmitting = false;
          //alert('User updated successfully!');

          this.alertDetails = { type: 'success', message: "User updated successfully!" };
          this.showAlert = true;

          //this.router.navigate(['/admin/user/list']);
        },
        (error) => {
          this.isSubmitting = false;
          console.error('Error updating user:', error);
          //alert('An error occurred while updating the user. Please try again.');
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
    return  this.user.user_type!.trim() !== '' &&
            this.user.user_name!.trim() !== '' &&
            this.user.email!.trim() !== '' &&
            this.user.password!.trim() !== '' &&
            this.user.phone!.trim() !== '' &&
            this.user.country!.trim() !== '' &&
            this.user.state!.trim() !== '' &&
            this.user.city!.trim() !== '' &&
            this.user.zipcode!.trim() !== '' &&
            this.user.status!.trim() !== '';
  }

  closeAlert() {
    this.showAlert = false;
  }

}
