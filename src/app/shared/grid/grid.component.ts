import { Component, Input } from '@angular/core';
import { Border } from '../models/Border';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() rows: number = 0;
  @Input() cols: number = 0;
  @Input() grid: number[][] = [];

  @Input() rowInGroup: number = 0;
  @Input() colInGroup: number = 0;

  get rowIndices(): number[] {
    return Array(this.rows).fill(0).map((x, i) => i);
  }

  get colIndices(): number[] {
    return Array(this.cols).fill(0).map((x, i) => i);
  }

  getCell(row: number, col: number): number {
    return this.grid[row][col];
  }

  getBorderColor(row: number, col: number): Border {
    let border = new Border();

    if (row % this.rowInGroup === 0) {
      border.top.width = 2;
      border.top.style = 'solid';
    }

    if (row % this.rowInGroup === this.rowInGroup - 1) {
      border.bottom.width = 2;
      border.bottom.style = 'solid';
    }

    if (col % this.colInGroup === 0) {
      border.left.width = 2;
      border.left.style = 'solid';
    }

    if (col % this.colInGroup === this.colInGroup - 1) {
      border.right.width = 2;
      border.right.style = 'solid';
    }

    return border;
  }

}
