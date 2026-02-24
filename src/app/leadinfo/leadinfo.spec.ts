import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leadinfo } from './leadinfo';

describe('Leadinfo', () => {
  let component: Leadinfo;
  let fixture: ComponentFixture<Leadinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leadinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leadinfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
