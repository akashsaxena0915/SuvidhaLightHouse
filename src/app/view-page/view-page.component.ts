import { Component, OnInit } from '@angular/core';
import { ServiceDescService } from '../services/service-desc.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  items: Array<any> = [];
  cardsData: Array<any> = [];
  showPopup:boolean=false;
  poupCarryDate: { name: string, desc: string, status: boolean}={name:'',desc:'',status:false};
  constructor(readonly Servicedescesrvice:ServiceDescService) { }

  ngOnInit(): void {
    this.items = [
      { name: 'assets/images/1.jpg' },
      { name: 'assets/images/2.jpg' },
      { name: 'assets/images/3.jpg' },
      { name: 'assets/images/5.jpg' }
    ];

    this.cardsData = [
      {
        imgUrl: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
        name: "service 1",
        desc:"A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin"


      },
      {
        imgUrl: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
        name: "service 2",
        desc:"A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin"
        
      },
      {
        imgUrl: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
        name: "service 3",
        desc:"A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin"
        
      },
      {
        imgUrl: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
        name: "service 4",
        desc:"A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin"
        
      },
      {
        imgUrl: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
        name: "service 5",
        desc:"A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin"
        
      },
      {
        imgUrl: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
        name: "service 6",
        desc:"A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin"
        
      }

    ]
  }

  triggerPopup(name:string, desc:string){
    this.poupCarryDate.name=name;
    this.poupCarryDate.desc=desc;
    this.poupCarryDate.status=true;
    this.showPopup=true;
    this.Servicedescesrvice.serviceDataCarry.next(this.poupCarryDate);

  }
  changepopUpStatus(event:Event){
    this.showPopup=false;
  }

}
