import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'Box-component',
  template: `<p>This is a basic component!asdfasdfasfasfadsfasfasfas</p>`,
  styles: [
    `
      p {
        color: green;
      }
    `,
  ],
})
export class Box {}
