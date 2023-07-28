import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { GameMapComponent } from './components/game-map/game-map.component';
import { PlayerAreaComponent } from './components/player-area/player-area.component';
import { GameDetailsAreaComponent } from './components/game-details-area/game-details-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    GameMapComponent,
    PlayerAreaComponent,
    GameDetailsAreaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'twilight-zone';
}
