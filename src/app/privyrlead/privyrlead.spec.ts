import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privyrlead } from './privyrlead';

describe('Privyrlead', () => {
  let component: Privyrlead;
  let fixture: ComponentFixture<Privyrlead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privyrlead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privyrlead);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
