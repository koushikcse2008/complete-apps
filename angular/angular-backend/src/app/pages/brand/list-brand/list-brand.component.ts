import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrandService } from '../brand.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import BrandModel from "../brand.model";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './list-brand.component.html',
  styleUrl: './list-brand.component.css'
})
export class ListBrandComponent implements OnInit {
  brands: BrandModel[] = [];
  brand: BrandModel = { brand_name: '', brand_desc: '' };

  //Pagination
  totalBrands: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 1; 
  isLoading: boolean = false;

  constructor(
    private router: Router, 
    private brandService: BrandService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Manage Brand List");
    this.loadBrands(this.currentPage);
  }

  loadBrands(page: number): void {
    // this.brandService.getBrands().subscribe((result) => {
    //   this.brands = result;
    //   console.log(result);
    // });
    this.isLoading = true;
    this.brandService.getBrandsList(page, this.limit).subscribe(
      (response) => {
        this.brands = response.data;
        this.totalBrands = response.total;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
        this.isLoading = false;
        console.log(this.totalBrands);
      },
      (error) => {
        console.error('Error loading brands:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadBrands(this.currentPage - 1);
    }
  }

  // Navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadBrands(this.currentPage + 1);
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadBrands(page);
    }
  }

  editBrand(id: string) {
    this.router.navigate(['/admin/brand/update/'+id]);
  }

  deleteBrand(id: string): void {
    if (confirm('Are you sure you want to delete this brand?')) {
      this.brandService.deleteBrand(id).subscribe(
        () => {
          // Successfully deleted, reload the brands
          this.brands = this.brands.filter(c => c._id !== id);
          alert('Brand deleted successfully');
          this.loadBrands(1);
        },
        (error) => {
          console.error('Error deleting brand', error);
          alert('An error occurred while deleting the brand.');
        }
      );
    }
  }

}
