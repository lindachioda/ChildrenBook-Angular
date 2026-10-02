import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResult } from './no-result';

describe('NoResult', () => {
  let component: NoResult;
  let fixture: ComponentFixture<NoResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
