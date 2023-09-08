import { Component, Input, OnInit } from '@angular/core';

import { ImageModel } from 'src/app/models/image-model.entity';
import { DeletePhotoService } from 'src/app/usecases/uploads/delete-photo.service';
import { UploadPhotoService } from 'src/app/usecases/uploads/upload-photo.service';

@Component({
  selector: 'app-uploaded-photo-preview',
  templateUrl: './uploaded-photo-preview.component.html',
  styleUrls: ['./uploaded-photo-preview.component.css']
})
export class UploadedPhotoPreviewComponent implements OnInit {

  @Input('photo')
  photo!: ImageModel;

  @Input('isUploaded')
  isUploaded: boolean = false;
 
  constructor(
    protected readonly deletePhoto: DeletePhotoService,
    protected readonly uploadedPhoto: UploadPhotoService
  ) {}

  ngOnInit(): void {
    this.deletePhoto.done().subscribe(response => {
      this.isUploaded = false;
    })
    this.uploadedPhoto.done().subscribe(response => {
      this.photo = response;
      console.log(this.photo.url);
      console.log(this.photo.urlTransformed);
      this.isUploaded = true;
    })
  }
}