import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDetails } from './salary-details';

describe('SalaryDetails', () => {
  let component: SalaryDetails;
  let fixture: ComponentFixture<SalaryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
