import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import ProductModel from "../product.model";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  products: ProductModel[] = [];
  product: ProductModel = { 
    cat_id: '', 
    brand_id: '',
    prod_name: '',
    prod_slug: '',
    prod_inventory: '',
    prod_price: '',
    prod_short_desc: '',
    prod_desc: '',
    category: '',
    brand: ''
  };

  //Pagination
  totalProducts: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 5; 
  isLoading: boolean = false;

  constructor(
    private router: Router, 
    private productService: ProductService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Manage Product List");
    this.loadProducts(this.currentPage);
  }

  loadProducts(page: number): void {
    // this.productService.getProducts().subscribe((result) => {
    //   this.products = result;
    //   console.log(result);
    // });
    this.isLoading = true;
    this.productService.getProductsList(page, this.limit).subscribe(
      (response) => {
        this.products = response.data;
        this.totalProducts = response.total;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
        this.isLoading = false;
        console.log(this.products);
      },
      (error) => {
        console.error('Error loading products:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadProducts(this.currentPage - 1);
    }
  }

  // Navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadProducts(this.currentPage + 1);
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadProducts(page);
    }
  }

  editProduct(id: string) {
    this.router.navigate(['/admin/product/update/'+id]);
  }

  deleteProduct(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(
        () => {
          // Successfully deleted, reload the products
          this.products = this.products.filter(c => c._id !== id);
          alert('Product deleted successfully');
        },
        (error) => {
          console.error('Error deleting product', error);
          alert('An error occurred while deleting the product.');
        }
      );
    }
  }

}
