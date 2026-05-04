import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstThing } from './first-thing';

describe('FirstThing', () => {
  let component: FirstThing;
  let fixture: ComponentFixture<FirstThing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstThing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstThing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
