import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';

import { Cropped } from '../../../models/cropped.entity';
import { UploadPhotoService } from 'src/app/usecases/uploads/photo/upload-photo.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/signature/upload-signature.service';

@Component({
  selector: 'app-cropped-image',
  templateUrl: './cropped-image.component.html',
  styleUrls: ['./cropped-image.component.css']
})
export class CroppedImageComponent {

  transform: ImageTransform = {};
  event!: ImageCroppedEvent;
  cropped!: Cropped;
  scale: number = 1;
  
  constructor(
    protected readonly modalRef: MatDialogRef<CroppedImageComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: any,
    protected readonly uploadPhoto: UploadPhotoService,
    protected readonly unploadSignature: UploadSignatureService
  ) {}

  onUploadFile(): void {
    const blob = this.event.blob || '';
    const imgFile = new File([blob], 'image.png');
    const formData = new FormData();
    formData.append('img', imgFile)
  
    const positionX1 = this.event.imagePosition.x1;
    const positionY1 = this.event.imagePosition.y1;
    const width = this.event.width;
    const height = this.event.height;
    this.cropped = new Cropped({
      width, height, positionX1, positionY1
    });

    this.data.onUpload.run(formData, this.cropped);

    /*if(this.data.uploadWhat == 'photo') this.uploadPhoto.run(formData, this.cropped);

    else if(this.data.uploadWhat == 'signature') this.unploadSignature.run(formData, this.cropped);*/
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.event = event;
  }

  zoomOut(): void {
    this.scale -= .1;
    this.transform = { ...this.transform,scale: this.scale }
  }

  zoomIn() {
    this.scale += .1;
    this.transform = { ...this.transform,scale: this.scale }
  }
}