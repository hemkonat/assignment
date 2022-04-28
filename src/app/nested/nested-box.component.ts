import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lion-nested-box',
  templateUrl: './nested-box.component.html',
  styleUrls: ['./nested-box.component.sass']
})
export class NestedBoxComponent implements OnInit {
  public loop = Array(7);

  constructor() { }

  ngOnInit(): void {
  }

}
