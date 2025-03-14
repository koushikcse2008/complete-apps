import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrandService } from '../brand.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import BrandModel from '../brand.model';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-brand',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './create-brand.component.html',
  styleUrl: './create-brand.component.css'
})
export class CreateBrandComponent {
  categories: BrandModel[] = [];
  brand: BrandModel = { brand_name: '', brand_desc: '' };
  showAdd: boolean = false;

  constructor(
    private router: Router, 
    private brandService: BrandService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Create Brand List");
  }

  addBrand(): void {
    if (this.isFormValid()) {  
      this.brandService.createBrand(this.brand).subscribe(
        (data) => {          
          this.brand = { brand_name: '', brand_desc: '' }; 
          alert('Brand added successfully!');          
          this.router.navigate(['admin/brand/list']);
        },
        (error) => {
          console.error('Error creating brand:', error);
          alert('An error occurred while adding the brand. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }

  isFormValid(): boolean {
    return this.brand.brand_name!.trim() !== '' && this.brand.brand_desc!.trim() !== '';
  }
}
