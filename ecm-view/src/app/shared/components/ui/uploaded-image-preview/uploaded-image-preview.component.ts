import { Component, Input } from '@angular/core';

import { ImageModel } from 'src/app/models/image-model.entity';
import { DeletePhotoService } from 'src/app/usecases/uploads/delete-photo.service';

@Component({
  selector: 'app-uploaded-image-preview',
  templateUrl: './uploaded-image-preview.component.html',
  styleUrls: ['./uploaded-image-preview.component.css'],
  providers: [
    DeletePhotoService
  ]
})
export class UploadedImagePreviewComponent {

  @Input('typeImage')
  public typeImage: string = '';

  @Input('uploadedImage')
  public uploadedImage: ImageModel = new ImageModel({
    url: 'http://res.cloudinary.com/dt4bynswk/image/upload/v1683336785/ecm/fotos3x4/033cecfe-4110-4461-b464-bd28ef16e654.jpg',
    name: '033cecfe-4110-4461-b464-bd28ef16e654',
    width: 350,
    height: 450,
    uploadedAt: '2023-05-06T01:33:05Z',
    format: 'jpg'
  });

  public deletePhoto(publicId: string): void {
    this._deletePhoto.run(publicId);
  }

  public deleteSignature(publicId: string): void {}

  public constructor(private readonly _deletePhoto: DeletePhotoService) {}
  
}