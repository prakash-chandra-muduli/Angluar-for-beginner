import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  imports: [NgStyle, NgClass],
})
export class DirectivesComponent {
  isError = true;
  isVisible = true;
  fontSize = 16;
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  toggleError() {
    this.isError = !this.isError;
  }
  increaseFontSize() {
    this.fontSize += 2;
  }
}
