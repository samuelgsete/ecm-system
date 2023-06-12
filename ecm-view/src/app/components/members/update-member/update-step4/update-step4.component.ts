import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DeletePhotoService } from 'src/app/usecases/uploads/delete-photo.service';
import { DeleteSignatureService } from 'src/app/usecases/uploads/delete-signature.service';
import { OnFileDroppedPhotoService } from 'src/app/usecases/uploads/on-file-dropped-photo.service';
import { OnFileDroppedSignatureService } from 'src/app/usecases/uploads/on-file-dropped-signature.service';
import { OnUploadPhotoService } from 'src/app/usecases/uploads/on-upload-photo.service';
import { OnUploadSiginatureService } from 'src/app/usecases/uploads/on-upload-signature.service';
import { UploadPhotoService } from 'src/app/usecases/uploads/upload-photo.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/upload-signature.service';

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
    protected readonly onUploadPhoto: OnUploadPhotoService,
    protected readonly onFileDroppedPhoto: OnFileDroppedPhotoService,
    protected readonly uploadPhoto: UploadPhotoService,
    protected readonly deletePhoto: DeletePhotoService,
    protected readonly onUploadSignature: OnUploadSiginatureService,
    protected readonly onFileDroppedSignature: OnFileDroppedSignatureService,
    protected readonly uploadSignature: UploadSignatureService,
    protected readonly deleteSignature: DeleteSignatureService
  ) {}

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