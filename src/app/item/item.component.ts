import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemFromList;
  @Output() removeClick = new EventEmitter();
  @Output() changeStatusClick = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  removeByList(){
    this.removeClick.emit(this.itemFromList.id);
  }

  changeStatus(){
    this.changeStatusClick.emit(this.itemFromList.id)
  }
}
