import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss']
})
export class SelectOptionsComponent {
  @Input() options: string[] = [];
  @Output() selectedOption = new EventEmitter<string>();

  onSelect($event: Event){
    const selectedOption = ($event.target as HTMLSelectElement).value;
    this.selectedOption.emit(selectedOption);
  }
}
