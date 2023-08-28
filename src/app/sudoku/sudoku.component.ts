import { Component } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent {
  rows: number = 9;
  cols: number = 9;
  rowInGroup: number = 3;
  colInGroup: number = 3;
  grid: number[][] = Array(this.rows).fill(Array(this.cols));
}
