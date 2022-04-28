import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerSiblingComponent } from './timer-sibling.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from 'loader/loader.module';
import { CounterComponent } from './counter/counter.component';
import { CounterActionComponent } from './counter-action/counter-action.component';
import { CounterLogsComponent } from './counter-logs/counter-logs.component';
import { CounterTrackComponent } from './counter-track/counter-track.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TimerSiblingComponent
  }
];

@NgModule({
  declarations: [
    TimerSiblingComponent,
    CounterComponent,
    CounterActionComponent,
    CounterLogsComponent,
    CounterTrackComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TimerSiblingModule { }
