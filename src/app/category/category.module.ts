import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { LoaderModule } from 'loader/loader.module';
import { SortPipe } from 'sort.pipe';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  }
];

@NgModule({
  declarations: [
    CategoryComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoaderModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
