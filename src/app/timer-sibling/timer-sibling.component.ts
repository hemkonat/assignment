import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lion-timer-sibling',
  templateUrl: './timer-sibling.component.html',
  styleUrls: ['./timer-sibling.component.sass'],
})
export class TimerSiblingComponent implements OnInit {
  public timer = 0;
  private flag = 0;
  private interval: any;
  public logsArray: any = [];
  public pauseLogs: any = { key: 1, paused: [] ,timer: 0};
  public logsTrack = { started: 0, paused: 0, reset: 0 };

  constructor() {}

  ngOnInit(): void {}

  enteredTimer(event: any): void {
    if (this.flag === 0 && event.action === 'Start/Pause') {
      this.logsTrack.started = this.logsTrack.started + 1;
      event.key = 'Started';
      if (!this.timer){
      this.pauseLogs = this.pauselogscal(event);
      }
      this.pauseLogs.key =1;
      this.timer =
        this.pauseLogs.paused[this.pauseLogs.paused.length - 1]['Paused'];
      this.logsArray.push(event);
    } else if (this.flag === 1 && event.action === 'Start/Pause') {
      this.pauseLogs = this.pauselogscal(event);
      this.logsTrack.paused = this.logsTrack.paused + 1;
      event.key = 'Paused';
      this.logsArray.push(event);
    }
    if (event.action === 'Start/Pause') {
      this.counter();
    } else if (event.action === 'Reset') {
      this.reset();
    } else {
    }
  }

  pauselogscal(event: any) {
    if ((event.key = 'Started')) {
      this.pauseLogs.paused.push({
        Paused:
          this.timer === event.value || this.timer === 0
            ? event.value
            : this.timer,
      });
    } else {
      this.pauseLogs.paused.push({ Paused: this.timer });
    }
    this.pauseLogs.timer = event.value;
    return { ...this.pauseLogs };
  }

  counter(): void {
    if (this.flag == 1) {
      this.startPause();
    } else {
      this.interval = setInterval(() => {
        this.timer -= 1;
        this.flag = 1;
        if (this.timer <= 0) {
          clearInterval(this.interval);
        } else {
          this.timer = this.timer;
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
    this.logsArray = [];
    this.pauseLogs = { key: 0, paused: [], timer: 0};
    this.logsTrack = { started: 0, paused: 0, reset: 0 };
    clearInterval(this.interval);
    this.flag = 0;
    this.timer = 0;
  }
}
