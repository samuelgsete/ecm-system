import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { DestroyerShepherdSignatureService } from 'src/app/usecases/uploads/shepherd-signature/destroyer-shepherd-signature.service';
import { UploaderShepherdSignatureService } from 'src/app/usecases/uploads/shepherd-signature/uploader-shepherd-signature.service';
import { CroppedImageComponent } from '../../uploads-images/cropped-image/cropped-image.component';
import { ImageModel } from 'src/app/models/image-model.entity';
import { CreateShepherdService } from 'src/app/usecases/shepherd/create-shepherd.service';
import { FindShepherdService } from 'src/app/usecases/shepherd/find-shepherd.service';

@Component({
  selector: 'app-set-shepherd',
  templateUrl: './set-shepherd.component.html',
  styleUrls: ['./set-shepherd.component.css'],
  providers: [
    UploaderShepherdSignatureService,
    DestroyerShepherdSignatureService
  ]
})
export class SetShepherdComponent implements OnInit {

  form!: FormGroup;
  isUploadedSignatureShepherd: boolean = false;
  signatureShepherd!: ImageModel;

  constructor(
    protected readonly _fb: FormBuilder,
    protected readonly modal: MatDialog,
    protected readonly router: Router,
    protected readonly create: CreateShepherdService,
    protected readonly find: FindShepherdService,
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

  ngOnInit(): void {
    this.form = this._fb.group({
      id: [null],
      name: ['João Gonçalves Rodrigues', [Validators.required, Validators.minLength(2), Validators.maxLength(42)]],
      location: ['Fortaleza-CE', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
      signature: [null, Validators.required],
      createdAt: [null],
      updatedAt: [null]
    });

    this.upload.done().subscribe(response => {
      this.signatureShepherd = new ImageModel(response);
      this.isUploadedSignatureShepherd = true;
      this.form.controls['signature'].patchValue(response);
    })

    this.destroyer.done().subscribe(response => {
      this.isUploadedSignatureShepherd = false;
      this.form.controls['signature'].patchValue(null);
    })

    this.create.done().subscribe(response => {
      this.find.run();
    })
  }
}