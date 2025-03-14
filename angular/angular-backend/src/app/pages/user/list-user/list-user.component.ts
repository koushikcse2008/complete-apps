import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import UserModel from "../user.model";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {
  users: UserModel[] = [];
  user: UserModel = { user_type: '', user_name: '', email: '', password: '', phone: '', country: '', state: '', city: '', zipcode: '', status: '' };

  //Pagination
  totalUsers: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 1; 
  isLoading: boolean = false;

  constructor (
    private router: Router, 
    private userService: UserService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Manage User List");
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number): void {
    this.isLoading = true;
    this.userService.getUsersList(page, this.limit).subscribe(
      (response) => {
        this.users = response.data;
        this.totalUsers = response.total;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
        this.isLoading = false;
        console.log(this.totalUsers);
      },
      (error) => {
        console.error('Error loading users:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadUsers(this.currentPage - 1);
    }
  }

  // Navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadUsers(this.currentPage + 1);
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadUsers(page);
    }
  }

  editUser(id: string) {
    this.router.navigate(['/admin/user/update/'+id]);
  }

  deleteUser(id: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(
        () => {
          // Successfully deleted, reload the users
          this.users = this.users.filter(c => c._id !== id);
          alert('User deleted successfully');
          this.loadUsers(1);
        },
        (error) => {
          console.error('Error deleting user', error);
          alert('An error occurred while deleting the user.');
        }
      );
    }
  }

}
