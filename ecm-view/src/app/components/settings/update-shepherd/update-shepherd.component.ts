import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { DestroyerShepherdSignatureService } from 'src/app/usecases/uploads/shepherd-signature/destroyer-shepherd-signature.service';
import { UploaderShepherdSignatureService } from 'src/app/usecases/uploads/shepherd-signature/uploader-shepherd-signature.service';
import { CroppedImageComponent } from '../../uploads-images/cropped-image/cropped-image.component';
import { ImageModel } from 'src/app/models/image-model.entity';
import { Shepherd } from 'src/app/models/shepherd.entity';
import { UpdateShepherdService } from 'src/app/usecases/shepherd/update-shepherd.service';

@Component({
  selector: 'app-update-shepherd',
  templateUrl: './update-shepherd.component.html',
  styleUrls: ['./update-shepherd.component.css'],
  providers: [
    UploaderShepherdSignatureService,
    DestroyerShepherdSignatureService
  ]
})
export class UpdateShepherdComponent implements OnInit {

  @Input() shepherd!: Shepherd;
  form!: FormGroup;
  isUploadedSignatureShepherd: boolean = false;
  signatureShepherd!: ImageModel;

  constructor(
    protected readonly _fb: FormBuilder,
    protected readonly modal: MatDialog,
    protected readonly router: Router,
    protected readonly update: UpdateShepherdService,
    protected readonly upload: UploaderShepherdSignatureService,
    protected readonly destroyer: DestroyerShepherdSignatureService
  ) {}

  onChangeSignature(_changeEvent: Event): void {
    this.modal.open(CroppedImageComponent, {
      data: {
        changeEvent: _changeEvent,
        onUpload: this.upload
      }
    })
  }

  buildForm(): void {
    this.isUploadedSignatureShepherd = true;
    this.signatureShepherd = this.shepherd.signature;
    this.form = this._fb.group({
      id: [this.shepherd.id],
      name: [this.shepherd.name, [Validators.required, Validators.minLength(2), Validators.maxLength(42)]],
      location: [this.shepherd.location, [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
      signature: [this.shepherd.signature, Validators.required],
      createdAt: [this.shepherd.createdAt],
      updatedAt: [this.shepherd.updatedAt]
    });
  }

  updateImageSignature(data: any): void {
    this.signatureShepherd.name = data.name
    this.signatureShepherd.publicId = data.publicId
    this.signatureShepherd.url = data.url
    this.signatureShepherd.urlTransformed = data.urlTransformed
    this.signatureShepherd.width = data.width
    this.signatureShepherd.height = data.height
    this.signatureShepherd.size = data.size
    this.signatureShepherd.format = data.format
    this.signatureShepherd.updatedAt = data.updatedAt

    this.isUploadedSignatureShepherd = true;
    this.form.controls['signature'].patchValue(this.signatureShepherd)
  }

  ngOnInit(): void {
    this.buildForm();
    this.upload.done().subscribe(response => {
      this.updateImageSignature(response);
    });
    this.destroyer.done().subscribe(response => {
      this.isUploadedSignatureShepherd = false;
      this.form.controls['signature'].patchValue(null);
    })
  }
}