import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

type AnctonAndValue = {
  action: string;
  value: string;
  time: Date;
};

@Component({
  selector: 'lion-counter-action',
  templateUrl: './counter-action.component.html',
  styleUrls: ['./counter-action.component.sass'],
})
export class CounterActionComponent implements OnInit, OnChanges {
  @Output() count: EventEmitter<AnctonAndValue> =
    new EventEmitter<AnctonAndValue>();
  @Input() pauselogs: any;
  length: any;
  form: FormGroup = new FormGroup({
    input: new FormControl('', [Validators.pattern('^[0-9]+$')]),
  });
  buttonBool = true;
  message!: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['pauselogs']['firstChange']) {
      this.pauselogs.key !== 0
        ? this.form.controls['input'].disable()
        : this.form.controls['input'].enable();
      this.pauselogs.key !== 0 ? '' : this.form.controls['input'].reset();
      this.pauselogs.paused = this.pauselogs.paused.filter(
        (res: { Paused: any }) => res.Paused !== this.pauselogs.timer
      );
      this.buttonBool = this.pauselogs.key !== 0 ? true : false;
    }
  }

  ngOnInit(): void {
    this.form.controls['input'].valueChanges
      .pipe(debounceTime(500))
      .subscribe((res) => {
        if (res) {
          this.buttonBool = false;
        } else {
          this.buttonBool = true;
        }
      });
  }

  action(value: any): any {
    if (!this.form.controls['input'].errors) {
      this.count.emit({
        action: value,
        value: this.form.controls['input'].value,
        time: new Date(),
      });
    }
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
