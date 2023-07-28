import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexFieldComponent } from '../hex-field/hex-field.component';
import { HexFieldType } from 'src/app/utils/enums/HexFieldType.enum';

@Component({
  selector: 'game-map',
  standalone: true,
  imports: [CommonModule, HexFieldComponent],
  templateUrl: './game-map.component.html',
  styleUrls: ['./game-map.component.scss'],
})
export class GameMapComponent {
  public hexFieldEnum = HexFieldType;
}
