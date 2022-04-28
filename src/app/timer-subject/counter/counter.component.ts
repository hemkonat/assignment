import { Component, OnInit } from '@angular/core';
import { DynamicRoutesService } from 'dynamic-routes.service';

@Component({
  selector: 'lion-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {

  constructor(public service: DynamicRoutesService) { }

  ngOnInit(): void {
  }

}
