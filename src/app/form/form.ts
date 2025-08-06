import { Component } from '@angular/core';

@Component({
  selector: 'form-component',
  template: `
    <form>
      <label for="name">Name:</label>
      <input id="name" name="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        width: 200px;
      }
      label {
        margin-bottom: 5px;
      }
    `,
  ],
})
export class FormComponent {
  name: string = '';

  onSubmit() {
    console.log('Submitted name:', this.name);
  }
}
