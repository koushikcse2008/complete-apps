import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }

  private toastSubject = new Subject<any>();

  getToast() {
    return this.toastSubject.asObservable();
  }

  showToast(message: string, type: string) {
    this.toastSubject.next({ message, type });
  }
}
