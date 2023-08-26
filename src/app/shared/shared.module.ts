import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { FormsModule } from '@angular/forms';
import { GridInputComponent } from './grid-input/grid-input.component';

@NgModule({
  declarations: [
    SelectOptionsComponent,
    GridInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectOptionsComponent,
    GridInputComponent
  ]
})
export class SharedModule { }
