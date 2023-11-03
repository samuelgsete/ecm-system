import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { CroppedImageComponent } from 'src/app/components/uploads-images/cropped-image/cropped-image.component';
import { ImageModel } from 'src/app/models/image-model.entity';
import { DestroyerPhotoService } from 'src/app/usecases/uploads/photo/destroyer-photo.service';
import { UploadPhotoService } from 'src/app/usecases/uploads/photo/upload-photo.service';
import { DestroyerSignatureService } from 'src/app/usecases/uploads/signature/destroyer-signature.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/signature/upload-signature.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  @Input() form!: FormGroup;
  protected isUploadedPhoto: boolean = false;
  protected isUploadedSignature: boolean = false;
  protected photo!: ImageModel;
  protected signature!: ImageModel;

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
    this.uploadPhoto.done().subscribe(response => {
      this.photo = new ImageModel(response);
      this.isUploadedPhoto = true;
      this.form.controls['photo'].patchValue(response);
    })

    this.destroyerPhoto.done().subscribe(response => {
      this.isUploadedPhoto = false;
      this.form.controls['photo'].patchValue(null);
    })

    this.uploadSignature.done().subscribe(response => {
      this.signature = new ImageModel(response);
      this.isUploadedSignature = true;
      this.form.controls['signature'].patchValue(response);
    })

    this.destroyerSignature.done().subscribe(response => {
      this.isUploadedSignature = false;
      this.form.controls['signature'].patchValue(null);
    })
  }
}