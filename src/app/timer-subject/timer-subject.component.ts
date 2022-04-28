import { Component, OnInit } from '@angular/core';
import { DynamicRoutesService } from 'dynamic-routes.service';

@Component({
  selector: 'lion-timer-subject',
  templateUrl: './timer-subject.component.html',
  styleUrls: ['./timer-subject.component.sass']
})
export class TimerSubjectComponent implements OnInit {

  public timer = 0;
  private timerbackup = 0;
  private flag = 0;
  private interval: any;
  public logsArray:any =[];
  public logsTrack = {'started':0, 'paused':0, 'reset':0};

  constructor(private service: DynamicRoutesService) {}

  ngOnInit(): void {
    this.service.couteraction$.subscribe(event =>{
    console.log(event);
    this.timer == 0?this.timer = Number(event.value):'';
    this.timerbackup = Number(event.value);
    if(this.flag === 0 && event.action === 'Start/Pause'){
      this.service.logsTrack$.value.started += 1;
      this.service.logsTrack$.next(this.service.logsTrack$.value);
     event.key = 'Started';
     this.service.logsArray$.value.push(event);
       this.service.logsArray$.next(this.service.logsArray$.value);
    }else if(this.flag === 1 && event.action === 'Start/Pause'){
     this.logsTrack.paused = this.logsTrack.paused+1;
     this.service.logsTrack$.value.paused +=1;
      this.service.logsTrack$.next(this.service.logsTrack$.value);
     event.key = 'Paused';
     this.service.logsArray$.value.push(event);
      this.service.logsArray$.next(this.service.logsArray$.value);
    }
    if (event.action === 'Start/Pause') {
      this.counter();
    } else if (event.action === 'Reset') {
      this.reset();
    } else {
    }
});
}

  counter(): void {
    if (this.flag == 1) {
      let arr = this.service.pausedLogs$.value;
      arr.push(this.service.count$.value);
      this.service.pausedLogs$.next(arr);
      this.startPause();
    } else {
      this.interval = setInterval(() => {
        this.timer -= 1;
        this.flag = 1;
        console.log(this.timer);
        if (this.timer <= 0) {
          clearInterval(this.interval);
        } else {
          this.service.count$.next(this.timer);
        }
      }, 100);
    }
  }
  startPause(): void {
    this.flag == 1 ? this.pause() : this.counter();
    this.flag = 0;
  }
  pause(): void {
    clearInterval(this.interval);
  }
  reset(): void {
    this.service.logsArray$.next([]);
    this.service.buttonBool$.next(true);
    this.service.pausedLogs$.next([]);
    this.service.logsTrack$.next({'started':0, 'paused':0, 'reset':0});
    clearInterval(this.interval);
    this.flag = -1;
    this.service.count$.next(0);
  }
}
