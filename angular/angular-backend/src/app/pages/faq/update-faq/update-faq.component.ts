import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaqService } from '../faq.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import FaqModel from "../faq.model";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertComponent } from '../../../shared/components/alert/alert.component';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-faq',
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './update-faq.component.html',
  styleUrl: './update-faq.component.css'
})
export class UpdateFaqComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private faqService: FaqService, 
    private titleService: Title
  ) {}
  
  updateForm!: FormGroup;
  isSubmitting = false;
  faqId: string = "";
  faq = { faq_question: '', faq_answer: '' };

  alertDetails = { type: '', message: '' };
  showAlert = false;


  get faq_question() {
    return this.updateForm.get('faq_question');
  }

  get faq_answer() {
    return this.updateForm.get('faq_answer');
  }

  ngOnInit(): void {

    this.faqId = this.route.snapshot.paramMap.get('id')!;
    this.loadFaqs(this.faqId);
  }

  loadFaqs(id: string): void {
    this.faqService.editFaqs(id).subscribe((result) => {
      this.updateForm = this.fb.group({
        faq_question: [result.data.faq_question, [Validators.required, Validators.minLength(3)]],
        faq_answer: [result.data.faq_answer, [Validators.required, Validators.minLength(3)]]
      });

      console.log(this.updateForm);
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      console.log('Form Submitted:', this.updateForm.value);
      this.isSubmitting = true;
      this.faqService.updateFaq(this.faqId!, this.updateForm.value).subscribe(
        (data) => {
          this.isSubmitting = false;
          this.alertDetails = { type: 'success', message: "Faq updated successfully!" };
          this.showAlert = true;
          //this.router.navigate(['/admin/faq/list']);
        },
        (error) => {
          this.isSubmitting = false;
          this.alertDetails = { type: 'error', message: error };
          this.showAlert = true;
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  closeAlert() {
    this.showAlert = false;
  }


















  // faqId: string = "";
  // faqs: FaqModel[] = [];
  // faq: FaqModel = { _id: '', faq_question: '', faq_answer: '' };
  // isSubmitting: boolean = false;

  // constructor(
  //   private route: ActivatedRoute, 
  //   private router: Router, 
  //   private faqService: FaqService,
  //   private titleService: Title
  // ) {}
  
  // ngOnInit(): void {
  //   this.titleService.setTitle("Update FAQ List");
  //   this.faqId = this.route.snapshot.paramMap.get('id')!;
  //   this.faq._id = this.faqId;
  //   console.log(this.faqId);
  //   this.loadFaqs(this.faqId);
  // }

  // loadFaqs(id: string): void {
  //   this.faqService.editFaqs(id).subscribe((result) => {
  //     this.faq = result.data;
  //     console.log(result.data);
  //   });
  // }

  // updateFaq(): void {
  //   if (this.isFormValid()) {
  //     this.isSubmitting = true;
  //     this.faqService.updateFaq(this.faqId!, this.faq).subscribe(
  //       (data) => {
  //         this.isSubmitting = false;
  //         alert('Faq updated successfully!');
  //         this.router.navigate(['/admin/faq/list']);
  //       },
  //       (error) => {
  //         this.isSubmitting = false;
  //         console.error('Error updating faq:', error);
  //         alert('An error occurred while updating the faq. Please try again.');
  //       }
  //     );
  //   } else {
  //     alert('Please fill in all required fields');
  //   }
  // }

  // isFormValid(): boolean {
  //   return this.faq.faq_question?.trim() !== '' && this.faq.faq_answer?.trim() !== '';
  // }
}
