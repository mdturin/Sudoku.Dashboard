import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { GridInputComponent } from './grid-input/grid-input.component';

@NgModule({
  declarations: [
    SelectOptionsComponent,
    GridComponent,
    GridInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectOptionsComponent,
    GridComponent,
    GridInputComponent,
  ]
})
export class SharedModule { }
