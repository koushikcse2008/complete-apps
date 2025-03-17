import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import ContactModel from "../contact.model";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.css'
})
export class ListContactComponent implements OnInit {
  title = 'Manage Contact List';
  contacts: ContactModel[] = [];
  contact: ContactModel = { fname: '', lname: '', phone: '', email: '', subject: '', message: '' };

  //Pagination
  totalContacts: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 1; 
  isLoading: boolean = false;

  constructor (
    private router: Router, 
    private contactService: ContactService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Manage Contact List");
    this.loadContacts(this.currentPage);    
  }

  loadContacts(page: number): void {
    this.isLoading = true;
    this.contactService.getContactsList(page, this.limit).subscribe(
      (response) => {
        this.contacts = response.data;
        this.totalContacts = response.total;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
        this.isLoading = false;
        //console.log(this.totalContacts);
      },
      (error) => {
        //console.error('Error loading contacts:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadContacts(this.currentPage - 1);
    }
  }

  // Navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadContacts(this.currentPage + 1);
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadContacts(page);
    }
  }

  editContact(id: string) {
    this.router.navigate(['/admin/contact/update/'+id]);
  }

  deleteContact(id: string): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(id).subscribe(
        () => {
          // Successfully deleted, reload the contacts
          this.contacts = this.contacts.filter(c => c._id !== id);
          alert('Contact deleted successfully');
          this.loadContacts(1);
        },
        (error) => {
          console.error('Error deleting contact', error);
          alert('An error occurred while deleting the contact.');
        }
      );
    }
  }

  showDetails(id: string): void {
    this.contactService.editContacts(id).subscribe((result) => {
      this.contact = result.data;
    });
  }

}
