import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaresBoardComponent } from './squares-board.component';

describe('SquaresBoardComponent', () => {
  let component: SquaresBoardComponent;
  let fixture: ComponentFixture<SquaresBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquaresBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquaresBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
