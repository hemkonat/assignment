import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DynamicDivComponent
  }
];


@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicDivModule { }
