import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  arrItem = [];
  id = 1;
  
  constructor() { }

  ngOnInit() {
    
  }

  addToArrItem(input: string) {
    this.arrItem.push({
      id: this.id,
      input: input,
      status: false
    });
    this.id++; 
  } 
  
}

