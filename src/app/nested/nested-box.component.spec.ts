import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedBoxComponent } from './nested-box.component';

describe('NestedBoxComponent', () => {
  let component: NestedBoxComponent;
  let fixture: ComponentFixture<NestedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
