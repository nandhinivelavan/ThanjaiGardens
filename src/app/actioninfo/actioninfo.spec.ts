import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actioninfo } from './actioninfo';

describe('Actioninfo', () => {
  let component: Actioninfo;
  let fixture: ComponentFixture<Actioninfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actioninfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actioninfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
