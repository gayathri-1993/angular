import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app12';
  word: String | undefined; 

  @ViewChild(ChildComponent,{static:false})
  child !: ChildComponent


  constructor()
{
  console.log("cons")
}

ngOnInit(): void
{
  console.log("hello onInIt")
  console.log(this.child?.val)
}
ngDoCheck(): void
{
  console.log("hello do check")
}
ngAfterViewInit(): void{

  console.log("AFTER VIEW INIT")
  console.log(this.child?.val)
  
}
style="new1"

flag=false
arr=[1,2,3]

changeFlag()
{
  this.flag=!this.flag
  this.style="new2"
}


getData(e:any)
{
  this.title=e;
}
}
