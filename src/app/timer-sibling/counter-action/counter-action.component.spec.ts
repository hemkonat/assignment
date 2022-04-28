import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterActionComponent } from './counter-action.component';

describe('CounterActionComponent', () => {
  let component: CounterActionComponent;
  let fixture: ComponentFixture<CounterActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
