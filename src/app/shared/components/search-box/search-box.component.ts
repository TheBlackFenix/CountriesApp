import { Component, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder : string = '';

  @Output()
  public onValue = new EventEmitter<string>()

  @ViewChild('txtInput')
  public term! : ElementRef<HTMLInputElement>
  
  search(value :string) : void
  {
    this.onValue.emit(value)
  }
}
