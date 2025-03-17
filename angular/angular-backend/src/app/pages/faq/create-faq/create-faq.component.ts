import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaqService } from '../faq.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
//import FaqModel from '../faq.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from '../../../shared/components/alert/alert.component';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-faq',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule, AlertComponent, RouterLink],
  templateUrl: './create-faq.component.html',
  styleUrl: './create-faq.component.css'
})
export class CreateFaqComponent {

  form: FormGroup;

  alertDetails = { type: '', message: '' };
  showAlert = false;

  constructor(
    private fb: FormBuilder, 
    private faqService: FaqService,
    private router: Router, 
    private titleService: Title
  ) {
    // Initialize the form with validation rules
    this.form = this.fb.group({
      faq_question: ['', [Validators.required, Validators.minLength(3)]],
      faq_answer: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Create FAQ List");
  }

  // Getters to make the code more readable
  get faq_question() {
    return this.form.get('faq_question');
  }

  get faq_answer() {
    return this.form.get('faq_answer');
  }

  onSubmit() {
    if (this.form.valid) {
      //console.log('Form Submitted!', this.form.value);
      this.faqService.createFaq(this.form.value).subscribe(
              (data) => {
                //alert('Faq added successfully!');   
                this.showAlert = true;       
                this.alertDetails = { type: 'success', message: "Faq added successfully!" };
                this.form = this.fb.group({
                  faq_question: ['', [Validators.required, Validators.minLength(3)]],
                  faq_answer: ['', [Validators.required, Validators.minLength(3)]]
                });
                //this.router.navigate(['admin/faq/list']);
              },
              (error) => {
                //console.error('Error creating faq:', error);
                this.alertDetails = { type: 'error', message: error };
              }
            );
    } else {
      console.log('Form is invalid!');
    }
  }

  closeAlert() {
    this.showAlert = false;
  }
}
