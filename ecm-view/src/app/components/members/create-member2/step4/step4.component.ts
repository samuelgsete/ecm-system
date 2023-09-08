import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { CroppedImageComponent } from 'src/app/components/uploads-images/cropped-image/cropped-image.component';
import { DeletePhotoService } from 'src/app/usecases/uploads/delete-photo.service';
import { DeleteSignatureService } from 'src/app/usecases/uploads/delete-signature.service';
import { UploadPhotoService } from 'src/app/usecases/uploads/upload-photo.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/upload-signature.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  @Input() form!: FormGroup;
  protected isUploadedPhoto: boolean = false;
  protected isUploadedSignature: boolean = false;

  constructor(
    protected readonly modal: MatDialog,
    protected readonly uploadPhoto: UploadPhotoService,
    protected readonly deletePhoto: DeletePhotoService,
    protected readonly uploadSignature: UploadSignatureService,
    protected readonly deleteSignature: DeleteSignatureService,
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
    this.uploadPhoto.done().subscribe(response => {
      this.form.controls['photo'].patchValue(response);
      this.isUploadedPhoto = true;
    })
    this.deletePhoto.done().subscribe(response => {
      this.isUploadedPhoto = false;
      this.form.controls['photo'].patchValue(null);
    })
    this.uploadSignature.done().subscribe(response => {
      this.form.controls['signature'].patchValue(response);
      this.isUploadedSignature = true;
    })
    this.deleteSignature.done().subscribe(response => {
      this.isUploadedSignature = false;
      this.form.controls['signature'].patchValue(null);
    })
  }
}