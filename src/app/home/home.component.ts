import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { FormFieldComponent } from '../components/form-field/form-field.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../components/button/button.component';
import { FolderComponent } from '../components/folder/folder.component';
import { BoxComponent } from '../components/box/box.component';
import { ModalComponent } from '../components/modals/modal/modal.component';
import { dataRecentsFolders } from '../../assets/data';
import { AboutUsComponent } from "../modules/about-us/about-us/about-us.component";
import { UploadModalComponent } from '../components/modals/upload-modal/upload-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    ButtonComponent,
    BoxComponent,
    FormFieldComponent,
    FolderComponent,
    UploadModalComponent,
    ReactiveFormsModule,
    AboutUsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
  });
  isModalVisible: boolean = false;

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl<string>('', [
        Validators.minLength(3),
        Validators.required
      ]), 
    });
  }

  closeModal(){
    this.isModalVisible = false;
  }
  openModal() {
    this.isModalVisible = true;
  }

  onSubmit(): void {
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    }
  }
  
  getClass(i: number): string {
    if (i === 0) return 'recent1';
    if (i === 1) return 'recent2';
    if (i === 2) return 'recent3';
    if (i === 3) return 'recent4';
    return 'class-recent';
  }

  get recent() : RecentProps[]{
    return [{
        icon: "assets/icons/account_primary.svg",
        name: "My Drive",
        color: "primary"
      },{
        icon: "assets/icons/group_secondary.svg",
        name: "Shared Files",
        color: "secondary"
      },{
        icon: "assets/icons/clock_default.svg",
        name: "Recent Files",
        color: "default"
      },{
        icon: "assets/icons/star_danger.svg",
        name: "Starred Files",
        color: "danger"
      },{
        icon: "assets/icons/star_danger.svg",
        name: "Strash Files",
        color: "danger"
      },
    ];
  } 



  get recentFolders(): any[]{
    return dataRecentsFolders;
  }
}


export interface RecentProps{
  name: string;
  icon: string;
  color: "primary" | "secondary" | "danger" | "default";
}