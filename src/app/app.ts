import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Box } from './box/box';
import { FormComponent } from './form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Box, FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
