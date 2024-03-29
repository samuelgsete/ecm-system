import { Component, Input } from '@angular/core';

import { ImageModel } from 'src/app/models/image-model.entity';
import { IDestroyerImage } from 'src/app/usecases/interfaces/destroyer-image';
import { OnFullScreenImage } from 'src/app/utils/services/on-fullscreen-image.service';

@Component({
  selector: 'app-uploaded-image-preview',
  templateUrl: './uploaded-image-preview.component.html',
  styleUrls: ['./uploaded-image-preview.component.css']
})
export class UploadedImagePreviewComponent {

  @Input() uploadedImage!: ImageModel;
  @Input() isUploaded: boolean = false;
  @Input() destroy!: IDestroyerImage;

  constructor(readonly onFullScreen: OnFullScreenImage) {}

}