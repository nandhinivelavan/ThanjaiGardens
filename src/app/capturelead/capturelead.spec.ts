import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capturelead } from './capturelead';

describe('Capturelead', () => {
  let component: Capturelead;
  let fixture: ComponentFixture<Capturelead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capturelead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capturelead);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
