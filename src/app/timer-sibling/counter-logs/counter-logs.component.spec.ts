import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLogsComponent } from './counter-logs.component';

describe('CounterLogsComponent', () => {
  let component: CounterLogsComponent;
  let fixture: ComponentFixture<CounterLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
