import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import ServiceModel from '../service.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './create-service.component.html',
  styleUrl: './create-service.component.css'
})
export class CreateServiceComponent {

  private apiUrl = `${environment.apiBaseUrl}/service/create`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  selectedFile: File | null = null;
  message: string = '';

  service: ServiceModel = { sv_name: '', sv_desc: '', sv_image: null};

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private fb: FormBuilder,
    private titleService: Title,
    private http: HttpClient
  ) {  }

  onFileSelected(event: any): void {
    this.service.sv_image = event.target.files[0];
  }

  ngOnInit(): void {
    this.titleService.setTitle("Create Service List");
  }

  onUpload(): void {
    if (!this.service.sv_name || !this.service.sv_desc || !this.service.sv_image) {
      this.message = 'Please fill out all fields and select an image.';
      alert("Please fill out all fields and select an image.");
      return;
    }    

    const formData = new FormData();
    formData.append('sv_name', this.service.sv_name);
    formData.append('sv_desc', this.service.sv_desc);
    formData.append('sv_image', this.service.sv_image, this.service.sv_image.name);

    this.http.post(this.apiUrl, formData, { headers: this.headers}).subscribe(
      (response) => {
        this.message = 'File uploaded successfully!';
        console.log(response);
        this.router.navigate(['admin/service/list']);
      },
      (error) => {
        this.message = 'Error uploading file!';
        console.error(error);
      }
    );
  }


  
}
