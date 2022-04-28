import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerSubjectComponent } from './timer-subject.component';
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
    component: TimerSubjectComponent
  }
];


@NgModule({
  declarations: [
    TimerSubjectComponent,
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
export class TimerSubjectModule { }
