import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../category.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import CategoryModel from "../category.model";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent implements OnInit {
  categories: CategoryModel[] = [];
  category: CategoryModel = { cat_name: '', cat_desc: '' };

  //Pagination
  totalCategories: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 5; 
  isLoading: boolean = false;

  constructor(
    private router: Router, 
    private categoryService: CategoryService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Manage Category List");
    this.loadCategories(this.currentPage);
  }

  loadCategories(page: number): void {
    // this.categoryService.getCategories().subscribe((result) => {
    //   this.categories = result;
    //   console.log(result);
    // });
    this.isLoading = true;
    this.categoryService.getCategoriesList(page, this.limit).subscribe(
      (response) => {
        this.categories = response.data;
        this.totalCategories = response.total;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
        this.isLoading = false;
        console.log(this.totalCategories);
      },
      (error) => {
        console.error('Error loading categories:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadCategories(this.currentPage - 1);
    }
  }

  // Navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadCategories(this.currentPage + 1);
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadCategories(page);
    }
  }

  editCategory(id: string) {
    this.router.navigate(['/admin/category/update/'+id]);
  }

  deleteCategory(id: string): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(id).subscribe(
        () => {
          // Successfully deleted, reload the categories
          this.categories = this.categories.filter(c => c._id !== id);
          alert('Category deleted successfully');
        },
        (error) => {
          console.error('Error deleting category', error);
          alert('An error occurred while deleting the category.');
        }
      );
    }
  }

}
