import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import {EditComponent} from './edit/edit.component';
import { BookComponent } from './book/book.component';
import {ListComponent} from './list/list.component';


const routes: Routes = [
  {path:'create', component: CreateComponent},
  {path:'edit/:bookid', component: EditComponent},
  {path:'list', component: ListComponent},
  {path:'', component: ListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateComponent,EditComponent,ListComponent]
