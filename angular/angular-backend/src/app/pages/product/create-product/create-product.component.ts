import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import ProductModel from '../product.model';
import { ProductService } from '../product.service';

import CategoryModel from '../../category/category.model';
import { CategoryService } from '../../category/category.service';

import BrandModel from '../../brand/brand.model';
import { BrandService } from '../../brand/brand.service';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  categories: CategoryModel[] = [];
  brands: BrandModel[] = [];
  product: ProductModel = { 
    cat_id: '', 
    brand_id: '',
    prod_name: '',
    prod_slug: '',
    prod_inventory: '',
    prod_price: '',
    prod_short_desc: '',
    prod_desc: '' 
  };
  showAdd: boolean = false;

  constructor(
    private router: Router, 
    private productService: ProductService,
    private titleService: Title,
    private categoryService: CategoryService,
    private brandService: BrandService,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Create Product List");
    this.loadCategory();
    this.loadBrand();
  }

  loadCategory(): void {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response;
        console.log(this.categories);
      },
      (error) => {
        console.error('Error loading category:', error);
      }
    );
  }

  loadBrand(): void {
    this.brandService.getBrands().subscribe(
      (response) => {
        this.brands = response;
        console.log(this.brands);
      },
      (error) => {
        console.error('Error loading category:', error);
      }
    );
  }

  addProduct(): void {
    if (this.isFormValid()) {  
      this.productService.createProduct(this.product).subscribe(
        (data) => {          
          this.product = { 
            cat_id: '', 
            brand_id: '',
            prod_name: '',
            prod_slug: '',
            prod_inventory: '',
            prod_price: '',
            prod_short_desc: '',
            prod_desc: ''
          }; 
          alert('Product added successfully!');          
          this.router.navigate(['admin/product/list']);
        },
        (error) => {
          console.error('Error creating product:', error);
          alert('An error occurred while adding the product. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }

  isFormValid(): boolean {
    return this.product.prod_name!.trim() !== '' && this.product.prod_desc!.trim() !== '';
  }
}
