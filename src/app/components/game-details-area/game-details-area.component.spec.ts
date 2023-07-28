import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsAreaComponent } from './game-details-area.component';

describe('GameDetailsAreaComponent', () => {
  let component: GameDetailsAreaComponent;
  let fixture: ComponentFixture<GameDetailsAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GameDetailsAreaComponent]
    });
    fixture = TestBed.createComponent(GameDetailsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
