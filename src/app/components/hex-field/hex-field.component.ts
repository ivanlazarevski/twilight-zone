import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexFieldType } from 'src/app/utils/enums/HexFieldType.enum';

@Component({
  selector: 'hex-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hex-field.component.html',
  styleUrls: ['./hex-field.component.scss'],
})
export class HexFieldComponent implements OnInit {
  @Input() fieldType: HexFieldType = HexFieldType.REGULAR;
  @ViewChild('hexDialog') hexDialog: ElementRef;
  classList = `hex regular`; // DEFAULT
  ngOnInit(): void {
    this.classList = `hex ${this.fieldType}`;
  }

  openHexDialog(): void {
    //@ts-ignore
    this.classList = `${this.classList} opened`;
    this.hexDialog.nativeElement.showModal();
  }

  closeHexDialog(): void {
    this.classList = `hex ${this.fieldType}`;
    this.hexDialog.nativeElement.close();
  }
}
