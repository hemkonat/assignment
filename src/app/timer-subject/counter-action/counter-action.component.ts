import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicRoutesService } from 'dynamic-routes.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'lion-counter-action',
  templateUrl: './counter-action.component.html',
  styleUrls: ['./counter-action.component.sass'],
})
export class CounterActionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    input: new FormControl('', [Validators.pattern('^[0-9]+$')]),
  });
  message!: string;

  constructor(public service: DynamicRoutesService) {}

  ngOnInit(): void {
    this.form.controls['input'].valueChanges
      .pipe(debounceTime(500))
      .subscribe((res) => {
          if (res) {
        if (!this.form.controls['input'].errors) {
            this.service.count$.next(res);
            this.service.buttonBool$.next(false);
        }
          } else {
            this.service.count$.next(0);
            this.service.buttonBool$.next(true);
          }
      });
  }

  action(value: any): any {
    value === 'Reset' ? this.form.controls['input'].reset() : '';
    this.service.couteraction$.next({
      action: value,
      value: this.form.controls['input'].value,
      time: new Date(),
      key: '',
    });
  }
  validator(): boolean {
    if (this.form.controls['input'].errors) {
      this.message = this.form.controls['input'].hasError('pattern')
        ? 'Please enter valid input'
        : 'Please enter value';
      return true;
    }
    return false;
  }
}
