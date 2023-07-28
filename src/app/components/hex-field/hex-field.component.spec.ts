import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexFieldComponent } from './hex-field.component';

describe('HexFieldComponent', () => {
  let component: HexFieldComponent;
  let fixture: ComponentFixture<HexFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HexFieldComponent]
    });
    fixture = TestBed.createComponent(HexFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
