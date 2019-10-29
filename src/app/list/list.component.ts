import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() arrItemFromInput;

  constructor() { }

  ngOnInit() {
  }

  removeItem(id: number) {
    let index = this.arrItemFromInput.findIndex(item => item.id === id);
    this.arrItemFromInput.splice(index, 1);
    console.log(index);
    console.log(this.arrItemFromInput)
  }

  changeStatusItem(id: number){
    this.arrItemFromInput[id].status = !this.arrItemFromInput[id].status;
  }
}
