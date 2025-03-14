import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import ServiceModel from "../service.model";
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './list-service.component.html',
  styleUrl: './list-service.component.css'
})
export class ListServiceComponent implements OnInit {
  services: ServiceModel[] = [];
  service: ServiceModel = { sv_name: '', sv_desc: '', sv_image: null };

  public apiUrl = `${environment.apiBaseUrl}/`;

  //Pagination
  totalServices: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 1; 
  isLoading: boolean = false;

  constructor(
    private router: Router, 
    private serviceService: ServiceService,
    private titleService: Title,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Manage Service List");
    this.loadServices(this.currentPage);
  }

  loadServices(page: number): void {
    // this.serviceService.getServices().subscribe((result) => {
    //   this.services = result;
    //   console.log(result);
    // });
    this.isLoading = true;
    this.serviceService.getServicesList(page, this.limit).subscribe(
      (response) => {
        this.services = response.data;
        this.totalServices = response.total;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
        this.isLoading = false;
        console.log(this.totalServices);
      },
      (error) => {
        console.error('Error loading services:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadServices(this.currentPage - 1);
    }
  }

  // Navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadServices(this.currentPage + 1);
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadServices(page);
    }
  }

  editService(id: string) {
    this.router.navigate(['/admin/service/update/'+id]);
  }

  deleteService(id: string): void {
    if (confirm('Are you sure you want to delete this service?')) {
      this.serviceService.deleteService(id).subscribe(
        () => {
          // Successfully deleted, reload the services
          this.services = this.services.filter(c => c._id !== id);
          this.toastr.success('Successfully deleted the item.', 'Success!', { closeButton: true, positionClass: 'toast-top-center'});
          this.loadServices(1);
        },
        (error) => {
          console.error('Error deleting service', error);
          //alert('An error occurred while deleting the service.');
          this.toastr.error('An error occurred while deleting the service.', 'Error!', { closeButton: true, positionClass: 'toast-top-center'});
        }
      );
    }
  }

}
