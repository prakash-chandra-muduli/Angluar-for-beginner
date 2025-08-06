import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Box } from './box/box';
import { FormComponent } from './form/form';
import { ActorFormComponent } from './form/actor-form/actor-form.component';
import { DirectivesComponent } from './coponents/directives/directives';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Box,
    FormComponent,
    ActorFormComponent,
    DirectivesComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
