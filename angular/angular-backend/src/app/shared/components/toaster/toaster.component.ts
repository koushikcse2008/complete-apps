import { Component, OnInit } from '@angular/core';
import { ToasterService } from './toaster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toaster',
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {
  message: string = '';
  type: string = '';
  visible: boolean = false;

  constructor(private toastService: ToasterService) {}

  ngOnInit() {
    this.toastService.getToast().subscribe(toast => {
      this.message = toast.message;
      this.type = toast.type;
      this.visible = true;

      // Hide the toast after 3 seconds
      setTimeout(() => {
        this.visible = false;
      }, 3000);
    });
  }
}
