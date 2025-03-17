import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutService } from '../about.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import AboutModel from '../about.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './create-about.component.html',
  styleUrl: './create-about.component.css'
})
export class CreateAboutComponent {

  selectedFile: File | null = null;
    message: string = '';
  
    about: AboutModel = { ab_name: '', ab_desc: '', ab_image: null};


  //abouts: AboutModel[] = [];
  //about: AboutModel = { ab_name: '', ab_desc: '', ab_image: null };
  //showAdd: boolean = false;

  private apiUrl = `${environment.apiBaseUrl}/about/create`;

  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(
    private router: Router, 
    private aboutService: AboutService,
    private titleService: Title,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  onFileSelected(event: any): void {
    this.about.ab_image = event.target.files[0];
  }

  ngOnInit(){
    this.titleService.setTitle("Create About List");
  }

  onUpload(): void {
    if (!this.about.ab_name || !this.about.ab_desc || !this.about.ab_image) {
      //this.message = 'Please fill out all fields and select an image.';
      alert("Please fill out all fields and select an image.");
      return;
    }    

    const formData = new FormData();
    formData.append('ab_name', this.about.ab_name);
    formData.append('ab_desc', this.about.ab_desc);
    formData.append('ab_image', this.about.ab_image, this.about.ab_image.name);

    this.http.post(this.apiUrl, formData, { headers: this.headers}).subscribe(
      (response) => {
        this.router.navigate(['admin/about/list']);
      },
      (error) => {
        this.message = 'Error uploading file!';
        console.error(error);
      }
    );
  }

  // addAbout(): void {
  //   if (this.isFormValid()) {  
  //     this.aboutService.createAbout(this.about).subscribe(
  //       (data) => {          
  //         this.about = { ab_name: '', ab_desc: '', ab_image: null }; 
  //         alert('About added successfully!');          
  //         this.router.navigate(['admin/about/list']);
  //       },
  //       (error) => {
  //         console.error('Error creating service:', error);
  //         alert('An error occurred while adding the service. Please try again.');
  //       }
  //     );
  //   } else {
  //     alert('Please fill in all required fields');
  //   }
  // }

  // isFormValid(): boolean {
  //   return  this.about.ab_name!.trim() !== '' && 
  //           this.about.ab_desc!.trim() !== '';
  // }
}
