import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() imageUrl: string = ''; 
  @Input() initials: string = '';  
  @Input() size: string = '40px';  
  @Input() shape: 'circle' | 'square' = 'circle'; 

  // Determine whether to show the image or initials
  get showInitials(): boolean {
    return !this.imageUrl;
  }
}
