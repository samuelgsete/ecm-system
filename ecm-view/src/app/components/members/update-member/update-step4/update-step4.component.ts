import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { UploadPhotoService } from 'src/app/usecases/uploads/photo/upload-photo.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/signature/upload-signature.service';
import { CroppedImageComponent } from 'src/app/components/uploads-images/cropped-image/cropped-image.component';
import { DestroyerPhotoService } from 'src/app/usecases/uploads/photo/destroyer-photo.service';
import { DestroyerSignatureService } from 'src/app/usecases/uploads/signature/destroyer-signature.service';
import { ImageModel } from 'src/app/models/image-model.entity';

@Component({
  selector: 'app-update-step4',
  templateUrl: './update-step4.component.html',
  styleUrls: ['./update-step4.component.css']
})
export class UpdateStep4Component implements OnInit {
  
  @Input()
  form!: FormGroup;
  protected isUploadedPhoto: boolean = true;
  protected isUploadedSignature: boolean = true;
  protected photo!: ImageModel;
  protected signature!: ImageModel;
  protected photoId: string = '';
  protected signatureId: string = '';

  constructor(
    protected readonly modal: MatDialog,
    protected readonly uploadPhoto: UploadPhotoService,
    protected readonly destroyerPhoto: DestroyerPhotoService,
    protected readonly uploadSignature: UploadSignatureService,
    protected readonly destroyerSignature: DestroyerSignatureService
  ) {}

  onChangePhoto(_changeEvent: Event): void {
    this.modal.open(CroppedImageComponent, {
      data: {
        changeEvent: _changeEvent,
        onUpload: this.uploadPhoto
      }
    })
  }

  onChangeSignature(_changeEvent: Event): void {
    this.modal.open(CroppedImageComponent, {
      data: {
        changeEvent: _changeEvent,
        onUpload: this.uploadSignature
      }
    })
  }

  ngOnInit(): void {
    this.photo = this.form.value['photo'];
    this.signature = this.form.value['signature'];
    this.photoId = this.form.value.photo.id;
    this.signatureId = this.form.value.signature.id;
    
    this.uploadPhoto.done().subscribe(response => {
      this.photo = response;
      this.photo.id = this.photoId;
      this.form.controls['photo'].patchValue(this.photo);
      this.isUploadedPhoto = true;
    })
    this.destroyerPhoto.done().subscribe(response => {
      this.isUploadedPhoto = false;
      this.form.controls['photo'].patchValue(null);
    })
    this.uploadSignature.done().subscribe(response => {
      this.signature = response;
      this.signature.id = this.signatureId;
      this.form.controls['signature'].patchValue(this.signature);
      this.isUploadedSignature = true;
    })
    this.destroyerSignature.done().subscribe(response => {
      this.isUploadedSignature = false;
      this.form.controls['signature'].patchValue(null);
    })
  }
}