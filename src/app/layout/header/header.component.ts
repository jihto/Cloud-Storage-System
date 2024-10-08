import { Component, Input } from '@angular/core'; 
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { FormFieldComponent } from "../../components/form-field/form-field.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modals/modal/modal.component';
import { BoxComponent } from "../../components/box/box.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    ButtonComponent,
    FormFieldComponent,
    ModalComponent,
    FormFieldComponent,
    BoxComponent,
    ReactiveFormsModule,
    BoxComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Input() isLogin: boolean = false;
  
  form: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  constructor( private fb: FormBuilder) {}

  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  } 
  ngOnInit(): void {
    this.form = this.fb.group({
      search: new FormControl<string>('', [
        Validators.minLength(3), 
      ]), 
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
