import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'game-details-area',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './game-details-area.component.html',
  styleUrls: ['./game-details-area.component.scss'],
})
export class GameDetailsAreaComponent {
  public victoryPointChart = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
