import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent { 
  @Input() isMin: boolean = false; 
  
  
  get isMinWidth() :string {
    return this.isMin ? 'min-width: 150px;' : 'min-width: 100%';
  }
}
