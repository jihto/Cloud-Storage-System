import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-modal',
  imports:[CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isVisible: boolean = false; 
  @Input() title!: string;
  @Output() closeModal = new EventEmitter<void>(); 

  onClose() {
    this.closeModal.emit(); 
  }
}
