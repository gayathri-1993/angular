import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() 
name:String|undefined;

@Output()
valToParent=new EventEmitter<String>(); 

val="hello from child";

ngOnChanges() : void
{
  console.log("on change")
}
ngOnDestroy()
{
  console.log("destroyed")
}

goTo()
{
  this.valToParent.emit("Hello parent from child"); 
}
}
