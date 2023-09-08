import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { DeletePhotoService } from 'src/app/usecases/uploads/delete-photo.service';
import { DeleteSignatureService } from 'src/app/usecases/uploads/delete-signature.service';
import { UploadPhotoService } from 'src/app/usecases/uploads/upload-photo.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/upload-signature.service';
import { CroppedImageComponent } from 'src/app/components/uploads-images/cropped-image/cropped-image.component';

@Component({
  selector: 'app-update-step4',
  templateUrl: './update-step4.component.html',
  styleUrls: ['./update-step4.component.css']
})
export class UpdateStep4Component implements OnInit {
  
  @Input() form!: FormGroup;
  isUploadedPhoto: boolean = true;
  isUploadedSignature: boolean = true;
  photoId: number = 0;
  signatureId: number = 0;

  constructor(
    protected readonly modal: MatDialog,
    protected readonly uploadPhoto: UploadPhotoService,
    protected readonly deletePhoto: DeletePhotoService,
    protected readonly uploadSignature: UploadSignatureService,
    protected readonly deleteSignature: DeleteSignatureService
  ) {}

  onChangeFile(_changeEvent: Event, _uploadWhat: string): void {
    this.modal.open(CroppedImageComponent, {
      data: {
        changeEvent: _changeEvent,
        uploadWhat: _uploadWhat
      }
    })
  }

  ngOnInit(): void {
    this.photoId = this.form.value.photo.id;
    this.signatureId = this.form.value.signature.id;
    this.uploadPhoto.done().subscribe(response => {
      let photo = response;
      photo.id = this.photoId;
      this.form.controls['photo'].patchValue(photo);
      this.isUploadedPhoto = true;
    })
    this.deletePhoto.done().subscribe(response => {
      this.isUploadedPhoto = false;
      this.form.controls['photo'].patchValue(null);
    })
    this.uploadSignature.done().subscribe(response => {
      let signature = response;
      signature.id = this.signatureId;
      this.form.controls['signature'].patchValue(signature);
      this.isUploadedSignature = true;
    })
    this.deleteSignature.done().subscribe(response => {
      this.isUploadedSignature = false;
      this.form.controls['signature'].patchValue(null);
    })
  }
}