import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDescService {

  constructor() { }

  public serviceDataCarry = new Subject<any>(); 
}
