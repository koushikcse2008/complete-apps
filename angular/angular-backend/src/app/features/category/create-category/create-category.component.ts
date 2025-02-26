import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../category.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import CategoryModel from '../category.model';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {
  categories: CategoryModel[] = [];
  category: CategoryModel = { cat_name: '', cat_desc: '' };
  showAdd: boolean = false;

  constructor(private router: Router, private categoryService: CategoryService) {}

  // addCategory(): void { 
  //   this.categoryService.createCategory(this.category).subscribe((data) => {
  //     this.category = { cat_name: '', cat_desc: '' }; 
  //     this.router.navigate(['admin/category/list']);
  //   });
  // }

  addCategory(): void {
    if (this.isFormValid()) {  
      this.categoryService.createCategory(this.category).subscribe(
        (data) => {          
          this.category = { cat_name: '', cat_desc: '' }; 
          alert('Category added successfully!');          
          this.router.navigate(['admin/category/list']);
        },
        (error) => {
          console.error('Error creating category:', error);
          alert('An error occurred while adding the category. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }

  isFormValid(): boolean {
    return this.category.cat_name!.trim() !== '' && this.category.cat_desc!.trim() !== '';
  }
}
