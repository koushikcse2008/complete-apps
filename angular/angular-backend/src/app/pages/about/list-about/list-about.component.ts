import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutService } from '../about.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import AboutModel from "../about.model";
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './list-about.component.html',
  styleUrl: './list-about.component.css'
})
export class ListAboutComponent implements OnInit {
  abouts: AboutModel[] = [];
  about: AboutModel = { ab_name: '', ab_desc: '', ab_image: null };

  //Pagination
  totalAbouts: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 1; 
  isLoading: boolean = false;

  public apiUrl = `${environment.apiBaseUrl}/`;

  constructor(
    private router: Router, 
    private aboutService: AboutService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Manage About List");
    this.loadAbout(this.currentPage);
  }
  
  loadAbout(page: number): void {

    this.isLoading = true;
    this.aboutService.getAboutsList(page, this.limit).subscribe(
      (response) => {
        this.abouts = response.data;
        this.totalAbouts = response.total;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
        this.isLoading = false;
        console.log(this.totalAbouts);
      },
      (error) => {
        console.error('Error loading abouts:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadAbout(this.currentPage - 1);
    }
  }

  // Navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadAbout(this.currentPage + 1);
    }
  }

  // Navigate to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadAbout(page);
    }
  }

  editAbout(id: string) {
    this.router.navigate(['/admin/about/update/'+id]);
  }

  deleteAbout(id: string): void {
    if (confirm('Are you sure you want to delete this about?')) {
      this.aboutService.deleteAbout(id).subscribe(
        () => {
          // Successfully deleted, reload the abouts
          this.abouts = this.abouts.filter(c => c._id !== id);
          alert('About deleted successfully');
          this.loadAbout(1);
        },
        (error) => {
          console.error('Error deleting about', error);
          alert('An error occurred while deleting the about.');
        }
      );
    }
  }

}
