import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputContent = '';
  @Output() myClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addByMain() {
    this.myClick.emit(this.inputContent);
    this.inputContent = '';
  }

}
