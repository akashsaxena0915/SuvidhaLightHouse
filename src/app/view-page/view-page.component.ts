import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  items:Array<any>=[];
  constructor() { }

  ngOnInit(): void {
    this.items =[
      {name:'assets/images/1.jpg'},
      {name:'assets/images/2.jpg'},
      {name:'assets/images/3.jpg'},
      {name:'assets/images/5.jpg'}
    ]
  }

}
