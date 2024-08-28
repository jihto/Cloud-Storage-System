import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent { 
  @Input() shape: "normal" | "circle" = 'normal';
  @Input() disabled: boolean = false; 
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'secondary' | 'danger' | 'default' = 'primary';
  @Input() icon: string = "";

  constructor() {}

  get shapeClasses(): string {
    return this.shape === "circle" ? `btn_circle_${this.color}` : `btn_normal_${this.color}`;
  }
}
