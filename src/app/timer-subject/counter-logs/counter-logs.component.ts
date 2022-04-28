import { Component, OnInit } from '@angular/core';
import { DynamicRoutesService } from 'dynamic-routes.service';

@Component({
  selector: 'lion-counter-logs',
  templateUrl: './counter-logs.component.html',
  styleUrls: ['./counter-logs.component.sass']
})
export class CounterLogsComponent implements OnInit {

  constructor(public service: DynamicRoutesService) { }

  ngOnInit(): void {
  }

}
