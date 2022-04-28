import { Component, OnInit } from '@angular/core';
import { DynamicRoutesService } from 'dynamic-routes.service';

@Component({
  selector: 'lion-counter-track',
  templateUrl: './counter-track.component.html',
  styleUrls: ['./counter-track.component.sass']
})
export class CounterTrackComponent implements OnInit {

  constructor(public service: DynamicRoutesService) { }

  ngOnInit(): void {
  }

}
