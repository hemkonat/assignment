import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from 'loader/loader.module';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  }
];


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TableModule { }
