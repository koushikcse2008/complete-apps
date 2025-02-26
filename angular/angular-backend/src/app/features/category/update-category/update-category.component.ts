import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../category.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import CategoryModel from "../category.model";

@Component({
  selector: 'app-update-category',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit{
  categoryId: string = "";
  categories: CategoryModel[] = [];
  category: CategoryModel = { _id: '', cat_name: '', cat_desc: '' };
  isSubmitting: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) {}
  
  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.category._id = this.categoryId;
    console.log(this.categoryId);
    this.loadCategories(this.categoryId);
  }

  loadCategories(id: string): void {
    this.categoryService.editCategories(id).subscribe((result) => {
      this.category = result.data;
      console.log(result.data);
    });
  }

  updateCategory(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.categoryService.updateCategory(this.categoryId!, this.category).subscribe(
        (data) => {
          this.isSubmitting = false;
          alert('Category updated successfully!');
          this.router.navigate(['/admin/category/list']);
        },
        (error) => {
          this.isSubmitting = false;
          console.error('Error updating category:', error);
          alert('An error occurred while updating the category. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }

  isFormValid(): boolean {
    return this.category.cat_name?.trim() !== '' && this.category.cat_desc?.trim() !== '';
  }
}
