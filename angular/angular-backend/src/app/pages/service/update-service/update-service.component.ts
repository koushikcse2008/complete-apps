import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../service.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import ServiceModel from "../service.model";
import { FormBuilder } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-service',
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.css'
})
export class UpdateServiceComponent implements OnInit{

  serviceId: string = "";
  selectedFile: File | null = null;
  message: string = '';
  isSubmitting: boolean = false;
  dataUrl = `${environment.apiBaseUrl}/`;
  serlectedImage: any = null;

  service: ServiceModel = { _id: '', sv_name: '', sv_desc: '', sv_image: null};

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder,
    private titleService: Title,
    private http: HttpClient
  ) {  }

  public apiUrl = this.dataUrl+`service`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  onFileSelected(event: any): void {
    this.service.sv_image = event.target.files[0];
  }

  ngOnInit(): void {
    this.titleService.setTitle("Update Service List");
    this.serviceId = this.route.snapshot.paramMap.get('id')!;
    this.service._id = this.serviceId;
    console.log(this.serviceId);
    this.loadServices(this.serviceId);
  }

  loadServices(id: string): void {
    this.serviceService.editServices(id).subscribe((result) => {
      this.service = result.data;
      this.serlectedImage = this.service.sv_image;
      console.log(result.data);
    });
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

    this.http.put(this.apiUrl+"/update/"+this.service._id, formData, { headers: this.headers}).subscribe(
      (response) => {
        this.message = 'File uploaded successfully!';
        this.router.navigate(['admin/service/list']);
      },
      (error) => {
        this.message = 'Error uploading file!';
        console.error(error);
      }
    );


  }
}
