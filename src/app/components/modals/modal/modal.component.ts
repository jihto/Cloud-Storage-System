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
  @Input() size: "small" | "medium" | "large" = "medium";
  @Input() title!: string;
  @Output() closeModal: EventEmitter<void>  = new EventEmitter<void>(); 

  onClose() {
    this.closeModal.emit(); 
  }

  get sizeClass(): string{
    switch(this.size){
      case "small":
        return "modal-small";
      case "medium":
        return "modal-medium";
      case "large":
        return "modal-large";
      default:
        return "modal-medium";
    }
  }
}
