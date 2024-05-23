import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [{
  path: "about",
  component: Page1Component
},
{
  path:"",
  component:AppComponent
},
{
  path: "child",
  component: AppComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
