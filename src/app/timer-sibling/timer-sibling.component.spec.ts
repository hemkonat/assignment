import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSiblingComponent } from './timer-sibling.component';

describe('TimerSiblingComponent', () => {
  let component: TimerSiblingComponent;
  let fixture: ComponentFixture<TimerSiblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerSiblingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
