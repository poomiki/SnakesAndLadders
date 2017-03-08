import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Output() msgEvent = new EventEmitter<number>(); 
  OnClick(){
    alert("clicked");
    this.msgEvent.emit(5);
  }
  
}
