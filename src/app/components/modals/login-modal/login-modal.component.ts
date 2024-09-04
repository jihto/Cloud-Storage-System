import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../button/button.component'; 
import { FormFieldComponent } from '../../form-field/form-field.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    ModalComponent,
    ButtonComponent,
    FormFieldComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  @Input() isModalVisible: boolean = false; 
  @Input() size: "small" | "medium" | "large" = "medium";
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  form: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  onClose() {
    this.closeModal.emit(); 
  }
  constructor( private fb: FormBuilder) {} 
  
  ngOnInit(): void {
    this.form = this.fb.group({ 
      username: new FormControl<string>('', [
        Validators.minLength(3), 
      ]), 
      password: new FormControl<string>('', [
        Validators.minLength(3), 
      ]), 
    });
  }
  onSubmit(): void {
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    }
  }
}
