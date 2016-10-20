import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-other',
  templateUrl: './app/other/other.component.html',
  styleUrls: ['./app/other/other.component.css']
})

export class OtherComponent {

  stringInterpolation = "This is string interpolation";
  numberInterpolation = 2;

  onTest() {
    return true;
  }

  onClicked(value: string) {
    alert(value);
  }
}