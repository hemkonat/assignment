import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTrackComponent } from './counter-track.component';

describe('CounterTrackComponent', () => {
  let component: CounterTrackComponent;
  let fixture: ComponentFixture<CounterTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
