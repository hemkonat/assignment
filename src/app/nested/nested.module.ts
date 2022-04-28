import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedBoxComponent } from './nested-box.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from 'loader/loader.module';

const routes: Routes = [
  {
    path: '',
    component: NestedBoxComponent
  }
];


@NgModule({
  declarations: [
    NestedBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NestedModule { }
