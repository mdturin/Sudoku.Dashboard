import { Component } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss'],
})
export class SudokuComponent {
  rows: number = 9;
  cols: number = 9;
  rowInGroup: number = 3;
  colInGroup: number = 3;
  grid: number[][] = Array(this.rows).fill(Array(this.cols));

  selectTypes: string[] = ['Normal', 'Killer'];
  selectSizes: string[] = ['4x4', '6x6', '9x9', '12x12', '16x16', '25x25'];

  onTypeSelected(type: string) {}

  onSizeSelected(size: string) {}

  onGenerateClick() {
    this.grid = Array(this.rows).fill(Array(this.cols));
  }

  onSolveClick() {}

  onClearClick() {
    this.grid = Array(this.rows).fill(Array(this.cols));
  }
}
