import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaqService } from '../faq.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import FaqModel from "../faq.model";

import { ToastrService } from 'ngx-toastr';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './list-faq.component.html',
  styleUrl: './list-faq.component.css'
})
export class ListFaqComponent implements OnInit {
  faqs: FaqModel[] = [];
  faq: FaqModel = { createdAt: '', faq_question: '', faq_answer: '' };

  //Pagination
  totalFaqs: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 2; 
  isLoading: boolean = false;

  constructor(
    private router: Router, 
    private faqService: FaqService,
    private titleService: Title,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Manage FAQ List");
    this.loadFaqs(this.currentPage);
  }

  loadFaqs(page: number): void {
    // this.faqService.getFaqs().subscribe((result) => {
    //   this.faqs = result;
    //   console.log(result);
    // });

    this.isLoading = true;
    this.faqService.getFaqsList(page, this.limit).subscribe(
      (response) => {
        this.faqs = response.data;
        this.totalFaqs = response.total;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
        this.isLoading = false;
        console.log(this.totalFaqs);
      },
      (error) => {
        console.error('Error loading faqs:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadFaqs(this.currentPage - 1);
    }
  }

  // Navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadFaqs(this.currentPage + 1);
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadFaqs(page);
    }
  }

  editFaq(id: string) {
    this.router.navigate(['/admin/faq/update/'+id]);
  }

  deleteFaq(id: string): void { 

    if (confirm('Are you sure you want to delete this faq?')) {
      this.faqService.deleteFaq(id).subscribe(
        () => {
          // Successfully deleted, reload the faqs
          this.faqs = this.faqs.filter(c => c._id !== id);
          this.toastr.success('Successfully deleted the item.', 'Success!', { closeButton: true, positionClass: 'toast-top-center'});
          this.loadFaqs(1);
        },
        (error) => {
          console.error('Error deleting faq', error);
          alert('An error occurred while deleting the faq.');
        }
      );
    } 
  }

  // Default sort order
  ascending = true;

  // Method to toggle between ascending and descending order
  toggleSort() {
    if(this.faqs.length > 0) {
      this.ascending = !this.ascending;
      this.sortList();
    } else {
      this.toastr.error('No data available to sort.', 'Error!', { closeButton: true, positionClass: 'toast-top-center'});
    }
  }

  // Method to sort the list based on selected order
  sortList() {
      this.faqs.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();  // Convert to timestamp (milliseconds)
        const dateB = new Date(b.createdAt).getTime();  // Convert to timestamp (milliseconds)
  
        // Ascending order
        if (this.ascending) {
          return dateA - dateB;
        } else {
          return dateB - dateA;  // Descending order
        }
      });
  }

}
