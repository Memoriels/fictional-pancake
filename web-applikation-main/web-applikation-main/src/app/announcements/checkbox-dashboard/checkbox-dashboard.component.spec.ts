import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDashboardComponent } from './checkbox-dashboard.component';

describe('CheckboxDashboardComponent', () => {
  let component: CheckboxDashboardComponent;
  let fixture: ComponentFixture<CheckboxDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
