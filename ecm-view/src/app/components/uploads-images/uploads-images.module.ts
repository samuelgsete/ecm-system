import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UtilsModule } from 'src/app/utils/utils.module';
import { UploadPhotoResource } from 'src/app/resources/uploads-images/upload-photo.resource';
import { UploadPhotoService } from 'src/app/usecases/uploads/upload-photo.service';
import { DeletePhotoResource } from 'src/app/resources/uploads-images/delete-photo.resource';
import { DeletePhotoService } from 'src/app/usecases/uploads/delete-photo.service';
import { UploadedPhotoPreviewComponent } from './uploaded-photo-preview/uploaded-photo-preview.component';
import { UploadedSignaturePreviewComponent } from './uploaded-signature-preview/uploaded-signature-preview.component';
import { UploadSignatureResource } from 'src/app/resources/uploads-images/upload-signature.resource';
import { UploadSignatureService } from 'src/app/usecases/uploads/upload-signature.service';
import { DeleteSignatureResource } from 'src/app/resources/uploads-images/delete-signature.resource';
import { DeleteSignatureService } from 'src/app/usecases/uploads/delete-signature.service';
import { OnUploadPhotoService } from 'src/app/usecases/uploads/on-upload-photo.service';
import { OnUploadSiginatureService } from 'src/app/usecases/uploads/on-upload-signature.service';
import { OnFileDroppedPhotoService } from 'src/app/usecases/uploads/on-file-dropped-photo.service';
import { OnFileDroppedSignatureService } from 'src/app/usecases/uploads/on-file-dropped-signature.service';
import { CroppedImageComponent } from './cropped-image/cropped-image.component';

@NgModule({
  declarations: [
    UploadedPhotoPreviewComponent,
    UploadedSignaturePreviewComponent,
    CroppedImageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UtilsModule
  ],
  exports: [
    UploadedPhotoPreviewComponent,
    UploadedSignaturePreviewComponent
  ],
  providers: [
    OnUploadPhotoService,
    OnFileDroppedPhotoService,
    UploadPhotoResource,
    UploadPhotoService,
    DeletePhotoResource,
    DeletePhotoService,
    OnUploadSiginatureService,
    OnFileDroppedSignatureService,
    UploadSignatureResource,
    UploadSignatureService,
    DeleteSignatureResource,
    DeleteSignatureService
  ]
})
export class UploadsImagesModule {}