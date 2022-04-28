import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lion-counter-logs',
  templateUrl: './counter-logs.component.html',
  styleUrls: ['./counter-logs.component.sass']
})
export class CounterLogsComponent implements OnInit {
  @Input() logs: any;

  constructor() { }

  ngOnInit(): void {
  }

}
