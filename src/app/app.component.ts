import { Component } from '@angular/core';
import { DynamicRoutesService } from 'dynamic-routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-assignment';

  constructor(public service: DynamicRoutesService){

  }
}
