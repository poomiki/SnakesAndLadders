import { Component, OnInit } from '@angular/core';
import { QuestionService } from "./question.service";
import { Question } from "../model/question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  currentQuestion:Question;

  favoriteSeason: string;
  question:string;
  answerIndex:number;
  questionId:number;
  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  constructor(private questionService:QuestionService) { }

  ngOnInit() {
    this.currentQuestion=this.questionService.getQuestionByID(1);
  }

  onClick(value:string){
    this.answerIndex=this.seasons.indexOf(value);
  }
}
