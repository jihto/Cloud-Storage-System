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
  @Input() styles: string ="";
  
  get getStyles() :string {
    let styles: string = "" 
    styles += this.styles || '';
    return styles;
  } 
}
