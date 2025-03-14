import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrandService } from '../brand.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import BrandModel from "../brand.model";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-brand',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-brand.component.html',
  styleUrl: './update-brand.component.css'
})
export class UpdateBrandComponent implements OnInit{
  brandId: string = "";
  brands: BrandModel[] = [];
  brand: BrandModel = { _id: '', brand_name: '', brand_desc: '' };
  isSubmitting: boolean = false;

  constructor (
    private route: ActivatedRoute, 
    private router: Router, 
    private brandService: BrandService,
    private titleService: Title
  ) {}
  
  ngOnInit(): void {
    this.titleService.setTitle("Update Brand List");
    this.brandId = this.route.snapshot.paramMap.get('id')!;
    this.brand._id = this.brandId;
    console.log(this.brandId);
    this.loadBrands(this.brandId);
  }

  loadBrands(id: string): void {
    this.brandService.editBrands(id).subscribe((result) => {
      this.brand = result.data;
      console.log(result.data);
    });
  }

  updateBrand(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.brandService.updateBrand(this.brandId, this.brand).subscribe(
        (data) => {
          this.isSubmitting = false;
          alert('Brand updated successfully!');
          this.router.navigate(['/admin/brand/list']);
        },
        (error) => {
          this.isSubmitting = false;
          console.error('Error updating brand:', error);
          alert('An error occurred while updating the brand. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }

  isFormValid(): boolean {
    return this.brand.brand_name?.trim() !== '' && this.brand.brand_desc?.trim() !== '';
  }
}
