import { Component, Input, OnInit } from '@angular/core';

import { ImageModel } from 'src/app/models/image-model.entity';
import { DeleteSignatureService } from 'src/app/usecases/uploads/delete-signature.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/upload-signature.service';

@Component({
  selector: 'app-uploaded-signature-preview',
  templateUrl: './uploaded-signature-preview.component.html',
  styleUrls: ['./uploaded-signature-preview.component.css']
})
export class UploadedSignaturePreviewComponent implements OnInit {

  @Input('signature')
  public signature!: ImageModel;

  @Input('isUploaded')
  public isUploaded: boolean = false;
 
  public constructor(
    protected readonly deleteSignature: DeleteSignatureService,
    protected readonly uploadedSignature: UploadSignatureService
  ) {}

  public ngOnInit(): void {
    this.deleteSignature.done().subscribe(response => {
      this.isUploaded = false;
    })
    this.uploadedSignature.done().subscribe(response => {
      this.signature = new ImageModel(response)
      this.isUploaded = true;
    })
  }
}