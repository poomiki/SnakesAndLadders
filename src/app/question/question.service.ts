import { Injectable } from '@angular/core';
import { Question } from "../model/question.model";
import { QUESTIONLIST } from "../model/questionsList.model";
import 'rxjs/add/operator/filter';

@Injectable()
export class QuestionService {

questionList:Question[];

  constructor() {
    this.questionList=QUESTIONLIST;
  }

  getQuestionList():Question[]{
    return this.questionList;
  }

  getQuestionByID(id:number):Question{
    return this.questionList.filter(x=>x.id== id)[0];
  }
  

}
