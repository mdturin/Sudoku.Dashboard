import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-input',
  templateUrl: './grid-input.component.html',
  styleUrls: ['./grid-input.component.scss']
})
export class GridInputComponent {
  @Input() rows: number = 0;
  @Input() cols: number = 0;
  @Input() grid: number[][] = [];

  get rowIndices(): number[] {
    return Array(this.rows).fill(0).map((x, i) => i);
  }

  get colIndices(): number[] {
    return Array(this.cols).fill(0).map((x, i) => i);
  }
}
