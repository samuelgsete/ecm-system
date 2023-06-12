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
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  @Input('form') public form!: FormGroup;

  protected isUploadedPhoto: boolean = false;
  protected isUploadedSignature: boolean = false;

  public constructor(
    protected readonly onUploadPhoto: OnUploadPhotoService,
    protected readonly onFileDroppedPhoto: OnFileDroppedPhotoService,
    protected readonly uploadPhoto: UploadPhotoService,
    protected readonly deletePhoto: DeletePhotoService,
    protected readonly onUploadSignature: OnUploadSiginatureService,
    protected readonly onFileDroppedSignature: OnFileDroppedSignatureService,
    protected readonly uploadSignature: UploadSignatureService,
    protected readonly deleteSignature: DeleteSignatureService,
  ) {}

  public ngOnInit(): void {
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