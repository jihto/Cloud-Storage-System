import { Component, Input } from '@angular/core'; 
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { FormFieldComponent } from "../../components/form-field/form-field.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent, 
    ButtonComponent,
    FormFieldComponent, 
    ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Input() isLogin: boolean = false;
  
  form: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: new FormControl<string>('', [
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
