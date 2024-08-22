import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input() label: string = '';                // Label for the form field
  @Input() control: AbstractControl = new FormControl(); // Form control instance
  @Input() type: string = 'text';              // Type of input (e.g., text, email, password)
  @Input() placeholder: string = '';           // Placeholder text for the input
  @Input() required: boolean = false;          // Whether the field is required

  get isInvalid(): boolean {
    return this.control && this.control.invalid && (this.control.dirty || this.control.touched);
  }
}
