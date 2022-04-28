import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSubjectComponent } from './timer-subject.component';

describe('TimerSubjectComponent', () => {
  let component: TimerSubjectComponent;
  let fixture: ComponentFixture<TimerSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
