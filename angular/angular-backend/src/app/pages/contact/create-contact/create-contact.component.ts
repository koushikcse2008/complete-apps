import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import ContactModel from '../contact.model';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})
export class CreateContactComponent {
  contacts: ContactModel[] = [];
  contact: ContactModel = { fname: '', lname: '', phone: '', email: '', subject: '', message: '' };
  showAdd: boolean = false;

  constructor(
    private router: Router, 
    private contactService: ContactService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Create Contact List");
  }

  addContact(): void {
    if (this.isFormValid()) {  
      this.contactService.createContact(this.contact).subscribe(
        (data) => {          
          this.contact = { fname: '', lname: '', phone: '', email: '', subject: '', message: '' }; 
          alert('Contact added successfully!');          
          this.router.navigate(['admin/contact/list']);
        },
        (error) => {
          console.error('Error creating contact:', error);
          alert('An error occurred while adding the contact. Please try again.');
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
