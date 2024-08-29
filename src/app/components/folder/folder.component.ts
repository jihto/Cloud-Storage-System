import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss'
})
export class FolderComponent {
  @Input() folderName: string = 'Documents';
  @Input() sharedWith: string[] = [];
  @Input() lastEdited: string = '8m ago';
  @Input() moreSharedCount: number = 0;
}
