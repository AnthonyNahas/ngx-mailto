import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMailtoComponent } from './ngx-mailto.component';

describe('NgxMailtoComponent', () => {
  let component: NgxMailtoComponent;
  let fixture: ComponentFixture<NgxMailtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMailtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMailtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
