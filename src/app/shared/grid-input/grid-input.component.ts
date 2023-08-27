import { Component, Input } from '@angular/core';
import { Border } from '../models/Border';
import { Margin } from '../models/Margin';

@Component({
  selector: 'app-grid-input',
  templateUrl: './grid-input.component.html',
  styleUrls: ['./grid-input.component.scss']
})
export class GridInputComponent {
  @Input() value: number = 0;
  @Input() maxlength: number = 1;
  @Input() type: string = 'number';
  @Input() margin: Margin = new Margin();
  @Input() backgroundColor: string = 'white';
  @Input() borderColor: Border = new Border();

  generateBorderColors(): any {
    var result = {
      'border-top': this.borderColor.getTop(),
      'border-right': this.borderColor.getRight(),
      'border-bottom': this.borderColor.getBottom(),
      'border-left': this.borderColor.getLeft()
    };

    return result;
  }

  generateMargin(): any {
    var result = {
      'margin-top': `${this.margin.top}px`,
      'margin-right': `${this.margin.right}px`,
      'margin-bottom': `${this.margin.bottom}px`,
      'margin-left': `${this.margin.left}px`
    };

    return result;
  }
}
