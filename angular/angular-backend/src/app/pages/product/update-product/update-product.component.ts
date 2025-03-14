import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from "../product.model";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-product',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{
  productId: string = "";
  categories: ProductModel[] = [];
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
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private productService: ProductService,
    private titleService: Title
  ) {}
  
  ngOnInit(): void {
    this.titleService.setTitle("Update Product List");
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.product._id = this.productId;
    console.log(this.productId);
    this.loadProducts(this.productId);
  }

  loadProducts(id: string): void {
    console.log(id);
    this.productService.editProducts(id).subscribe((result) => {
      this.product = result.data;
      console.log(result.data);
    });
  }

  updateProduct(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.productService.updateProduct(this.productId!, this.product).subscribe(
        (data) => {
          this.isSubmitting = false;
          alert('Product updated successfully!');
          this.router.navigate(['/admin/product/list']);
        },
        (error) => {
          this.isSubmitting = false;
          console.error('Error updating product:', error);
          alert('An error occurred while updating the product. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }

  isFormValid(): boolean {
    return this.product.prod_name?.trim() !== '' && this.product.prod_desc?.trim() !== '';
  }
}
