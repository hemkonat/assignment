import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lion-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  @Input() count: any;

  constructor() { }

  ngOnInit(): void {
  }

}
