import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent implements OnInit  { 
  @Input() type: string = 'text';            
  @Input() placeholder: string = '';
  @Input() required: boolean = false;   
  @Input() label: string = '';
  @Input() controlName: string = '';
  @Input() formGroup!: FormGroup;  
  @Input() isSubmit: boolean = false;
  @Input() icon: string = "";
  @Input() isDisabled: boolean = false;

  control!: FormControl;

  ngOnInit(): void {
    this.control = this.formGroup.get(this.controlName) as FormControl;
  }
  get isInvalid(): boolean {
    return this.control && this.control.invalid && (this.control.dirty || this.control.touched);
  }
}
