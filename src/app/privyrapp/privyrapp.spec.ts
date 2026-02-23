import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privyrapp } from './privyrapp';

describe('Privyrapp', () => {
  let component: Privyrapp;
  let fixture: ComponentFixture<Privyrapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privyrapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privyrapp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
