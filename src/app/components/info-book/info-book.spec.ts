import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBook } from './info-book';

describe('InfoBook', () => {
  let component: InfoBook;
  let fixture: ComponentFixture<InfoBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
