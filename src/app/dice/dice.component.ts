import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RandomNumberServiceService } from "./random-number-service.service";

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
  providers: [RandomNumberServiceService]
})
export class DiceComponent implements OnInit {

  value: number;
	visible: boolean = true;
  btnText:string="התחל משחק"
  constructor(private randomNumberService: RandomNumberServiceService) { }

  ngOnInit() {
  }
  
  @Output() msgEvent = new EventEmitter<number>(); 
  OnClick(){
	 this.btnText="גלגל אותה";
    this.visible = false;
		this.value = this.randomNumberService.getNr(1, 6);
		setTimeout(() => {this.visible = true;}, 200);
    this.msgEvent.emit(this.value);
  }
  
}
