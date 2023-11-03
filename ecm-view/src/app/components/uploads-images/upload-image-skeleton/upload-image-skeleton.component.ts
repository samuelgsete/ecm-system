import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-image-skeleton',
  templateUrl: './upload-image-skeleton.component.html',
  styleUrls: ['./upload-image-skeleton.component.css']
})
export class UploadImageSkeletonComponent {
  @Input() isVisible: boolean = false;
}