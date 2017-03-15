import { Component, AfterViewInit,ViewChild,Input } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

   @ViewChild("myCanvas") myCanvas;
   @ViewChild('img') img;
   src: string;
   @Input()
   Canvaswidth:number;
   @Input()
   Canvasheight:number;
   @Input()
   Canvassize:number;
   currentLocation:number=0;
   context:CanvasRenderingContext2D;
   element: HTMLImageElement;
   x: number;  
  constructor() {
           this.src = 'https://1.gravatar.com/avatar/d343b54fd168144d89f693e0c26fc63f?s=68&d=wavatar&r=G';
   }

  ngAfterViewInit() {

  }
  
  private calcLocation(For:number){
   let boxW=this.Canvaswidth/this.Canvassize;
   let BoxH=this.Canvasheight/this.Canvassize;
  }
  public Moveto(To:number){
    //alert(To);
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext("2d");
    this.element = this.img.nativeElement;
    let el=this.element;
    let ctx = this.context;
    this.x=16;
    let x=this.x;
    ctx.drawImage(this.element, this.x, 16, 32, 32);
 
   let refreshId= setInterval(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      x=x+68;
      ctx.drawImage(el, x, 16, 32, 32);
      console.log(x);
        if (x > 680) {
           clearInterval(refreshId);
  }
  }, 1000,ctx,el,x,canvas);
  }


}
