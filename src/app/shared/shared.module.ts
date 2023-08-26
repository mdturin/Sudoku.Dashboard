import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectOptionsComponent
  ]
})
export class SharedModule { }
