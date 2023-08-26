import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuComponent } from './sudoku.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SudokuComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SudokuRoutingModule { }
