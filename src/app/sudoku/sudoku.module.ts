import { NgModule } from '@angular/core';
import { SudokuComponent } from './sudoku.component';
import { SudokuRoutingModule } from './sudoku-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SudokuComponent
  ],
  imports: [
    SudokuRoutingModule,
    SharedModule
  ]
})
export class SudokuModule { }
