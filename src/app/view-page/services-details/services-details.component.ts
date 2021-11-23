import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceDescService } from 'src/app/services/service-desc.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit {

  @Input()public description: any;
  @Output() public popupstatus = new EventEmitter<any>();
  displayStyle = "block";
  constructor(readonly Servicedescesrvice:ServiceDescService) { }

  ngOnInit(): void {
    console.log(this.description);
    this.Servicedescesrvice.serviceDataCarry.subscribe((data)=>{
      this.description =data;
    });
  }

  
  
  closePopup() {
    this.displayStyle = "none";
    this.popupstatus.emit(false);
  }


}
