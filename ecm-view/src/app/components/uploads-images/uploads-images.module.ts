import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UtilsModule } from 'src/app/utils/utils.module';

import { UploadPhotoService } from 'src/app/usecases/uploads/photo/upload-photo.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/signature/upload-signature.service';
import { CroppedImageComponent } from './cropped-image/cropped-image.component';
import { UploadedImagePreviewComponent } from './uploaded-image-preview/uploaded-image-preview.component';
import { UploadImageSkeletonComponent } from './upload-image-skeleton/upload-image-skeleton.component';
import { DestroyerPhotoService } from 'src/app/usecases/uploads/photo/destroyer-photo.service';
import { DestroyerSignatureService } from 'src/app/usecases/uploads/signature/destroyer-signature.service';
import { DestroyerImageResource } from 'src/app/resources/uploads-images/destroyer-image.resource';
import { UploadImageResource } from 'src/app/resources/uploads-images/upload-image.resource';

@NgModule({
  declarations: [
    CroppedImageComponent,
    UploadedImagePreviewComponent,
    UploadImageSkeletonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UtilsModule
  ],
  exports: [
    UploadedImagePreviewComponent,
    UploadImageSkeletonComponent
  ],
  providers: [
    UploadPhotoService,
    UploadSignatureService,
    DestroyerPhotoService,
    DestroyerSignatureService,
    UploadImageResource,
    DestroyerImageResource
  ]
})
export class UploadsImagesModule {}