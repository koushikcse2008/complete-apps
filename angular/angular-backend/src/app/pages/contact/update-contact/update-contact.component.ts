import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactService } from '../contact.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import ContactModel from "../contact.model";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-contact',
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './update-contact.component.html',
  styleUrl: './update-contact.component.css'
})
export class UpdateContactComponent implements OnInit{
  contactId: string = "";
  contacts: ContactModel[] = [];
  contact: ContactModel = { _id: '', fname: '', lname: '', phone: '', email: '', subject: '', message: '' };
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private contactService: ContactService,
    private titleService: Title
  ) {}
  
  ngOnInit(): void {
    this.titleService.setTitle("Update Contact List");
    this.contactId = this.route.snapshot.paramMap.get('id')!;
    this.contact._id = this.contactId;
    console.log(this.contactId);
    this.loadContacts(this.contactId);
  }

  loadContacts(id: string): void {
    this.contactService.editContacts(id).subscribe((result) => {
      this.contact = result.data;
      console.log(result.data);
    });
  }

  updateContact(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.contactService.updateContact(this.contactId!, this.contact).subscribe(
        (data) => {
          this.isSubmitting = false;
          alert('Contact updated successfully!');
          this.router.navigate(['/admin/contact/list']);
        },
        (error) => {
          this.isSubmitting = false;
          console.error('Error updating contact:', error);
          alert('An error occurred while updating the contact. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }

  isFormValid(): boolean {
    return this.contact.fname!.trim() !== '' && this.contact.lname!.trim() !== '' && this.contact.phone!.trim() !== '' && this.contact.email!.trim() !== '' && this.contact.subject!.trim() !== '' && this.contact.message!.trim() !== '';
  }
}
