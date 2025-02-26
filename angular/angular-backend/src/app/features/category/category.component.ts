import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';

interface Category {
  _id?: string;
  cat_name: string;
  cat_desc?: string;
  createdAt?:string;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  category: Category = { cat_name: '', cat_desc: '' };
  showAdd: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  createCategoryShow(): void {
    this.showAdd = !this.showAdd;
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
      console.log(result);
    });
  }

  createCategory(): void {
    this.categoryService.createCategory(this.category).subscribe((data) => {
      this.loadCategories(); // Reload categories after creating
      this.category = { cat_name: '', cat_desc: '' }; // Clear form
    });
  }

  updateCategory(id: string): void {
    this.categoryService.updateCategory(id, this.category).subscribe(() => {
      this.loadCategories(); // Reload categories after updating
    });
  }

  deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.loadCategories(); // Reload categories after deleting
    });
  }
}
