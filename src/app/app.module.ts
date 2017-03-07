import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { DiceComponent } from './dice/dice.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from "./question/question.service";

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    DiceComponent,
    HeaderComponent,
    FooterComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
