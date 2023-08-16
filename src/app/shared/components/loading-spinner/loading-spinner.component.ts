import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: [
    `.spinner-container{
      position : fixed;
      bottom : 15px;
      right: 15px;
      background-color: black;
      color: white;
      padding: 5px 10px;
      border-radius: 15px;
      display: flex;
      align-items: center;
    }`
  ]
})
export class LoadingSpinnerComponent {

}
