import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from "../../button/button.component"; 

@Component({
  selector: 'app-upload-modal',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ModalComponent,
    ButtonComponent
],
  templateUrl: './upload-modal.component.html',
  styleUrl: './upload-modal.component.scss'
})
export class UploadModalComponent {
  @Input() isModalVisible: boolean = false; 
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
