import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lion-counter-track',
  templateUrl: './counter-track.component.html',
  styleUrls: ['./counter-track.component.sass'],
})
export class CounterTrackComponent implements OnInit {
  @Input() track: any;
  constructor() {}

  ngOnInit(): void {}
}
