import { Component, Input } from '@angular/core';
import { Border } from '../models/Border';
import { Margin } from '../models/Margin';

@Component({
  selector: 'app-grid-input',
  templateUrl: './grid-input.component.html',
  styleUrls: ['./grid-input.component.scss'],
})
export class GridInputComponent {
  @Input() value: number = 0;
  @Input() maxlength: number = 1;
  @Input() type: string = 'number';
  @Input() defaultValue: number = 0;
  @Input() margin: Margin = new Margin();
  @Input() backgroundColor: string = 'white';
  @Input() borderColor: Border = new Border();
  @Input() placeholder: string = '0';

  generateBorderColors(): any {
    var result = {
      'border-top': this.borderColor.getTop(),
      'border-right': this.borderColor.getRight(),
      'border-bottom': this.borderColor.getBottom(),
      'border-left': this.borderColor.getLeft(),
    };

    return result;
  }

  generateMargin(): any {
    var result = {
      'margin-top': `${this.margin.top}px`,
      'margin-right': `${this.margin.right}px`,
      'margin-bottom': `${this.margin.bottom}px`,
      'margin-left': `${this.margin.left}px`,
    };

    return result;
  }

  onInput(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }
    if (input.value.length > 0) {
      input.blur();
    }
  }

  onKeyDown(event: any): void {
    const allowedKeyCodes = [8, 9, 13, 27, 46]; // Allow Backspace, Tab, Enter, Escape, Delete
    const inputValue = event.key;

    if (event.keyCode === 48 || event.keyCode === 96) {
      event.preventDefault();
    } else if (
      !/^\d$/.test(inputValue) &&
      !allowedKeyCodes.includes(event.keyCode)
    ) {
      event.preventDefault();
    }
  }
}
