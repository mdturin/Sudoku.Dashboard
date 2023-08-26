import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuComponent } from './sudoku.component';
import { SudokuRoutingModule } from './sudoku-routing.module';



@NgModule({
  declarations: [
    SudokuComponent
  ],
  imports: [
    CommonModule,
    SudokuRoutingModule
  ]
})
export class SudokuModule { }
