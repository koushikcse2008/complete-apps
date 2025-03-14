import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutService } from '../about.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import AboutModel from "../about.model";

import { FormBuilder } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-update-service',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-about.component.html',
  styleUrl: './update-about.component.css'
})
export class UpdateAboutComponent implements OnInit{
  aboutId: string = "";
  abouts: AboutModel[] = [];
  about: AboutModel = { _id: '', ab_name: '', ab_desc: '', ab_image: null };
  isSubmitting: boolean = false;
  serlectedImage: any = null;
  dataUrl = `${environment.apiBaseUrl}/`;

  public apiUrl = this.dataUrl+`about`;

  onFileSelected(event: any): void {
    this.about.ab_image = event.target.files[0];
  }

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private aboutService: AboutService,
    private titleService: Title,
    private http: HttpClient
  ) {}
  
  ngOnInit(): void {
    this.titleService.setTitle("Update About List");
    this.aboutId = this.route.snapshot.paramMap.get('id')!;
    this.about._id = this.aboutId;
    console.log(this.aboutId);
    this.loadAbout(this.aboutId);
  }

  loadAbout(id: string): void {
    this.aboutService.editAbouts(id).subscribe((result) => {
      this.about = result.data;
      this.serlectedImage = this.about.ab_image;
      console.log(result.data);
    });
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

    this.http.put(this.apiUrl+"/update/"+this.about._id, formData).subscribe(
      (response) => {
        //this.message = 'File uploaded successfully!';
        this.router.navigate(['admin/about/list']);
      },
      (error) => {
        //this.message = 'Error uploading file!';
        console.error(error);
      }
    );


  }

  // updateAbout(): void {
  //   if (this.isFormValid()) {
  //     this.isSubmitting = true;
  //     this.aboutService.updateAbout(this.aboutId, this.about).subscribe(
  //       (data) => {
  //         this.isSubmitting = false;
  //         alert('About updated successfully!');
  //         this.router.navigate(['/admin/about/list']);
  //       },
  //       (error) => {
  //         this.isSubmitting = false;
  //         console.error('Error updating service:', error);
  //         alert('An error occurred while updating the service. Please try again.');
  //       }
  //     );
  //   } else {
  //     alert('Please fill in all required fields');
  //   }
  // }

  // isFormValid(): boolean {
  //   return this.about.ab_name?.trim() !== '' && this.about.ab_desc?.trim() !== '';
  // }
}
