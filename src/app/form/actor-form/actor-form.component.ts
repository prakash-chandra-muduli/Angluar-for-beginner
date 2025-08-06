import { Component } from '@angular/core';

import { FormsModule, NgModel } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Actor } from '../../actor';
@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css'],
  imports: [FormsModule],
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor('18', 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log('Form submitted with model:', this.model);
  }
}
