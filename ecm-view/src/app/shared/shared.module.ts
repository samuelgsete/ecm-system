import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

import { ListMaritalStatusService } from './usecases/list-marital-status.service';
import { ListGendersService } from './usecases/list-genders.service';
import { UploadedImagePreviewComponent } from './components/ui/uploaded-image-preview/uploaded-image-preview.component';
import { SmallTextPipe } from '../pipes/small-text.pipe';
import { DateDurationPipe } from '../pipes/date-duration.pipe';
import { FileSizePipe } from '../pipes/file-size.pipe';
import { MaritalStatusPipe } from '../pipes/marital-status.pipe';
import { DragDropUploadDirective } from '../directives/drag-drop-upload.directive';
import { NamePageComponent } from './components/name-page/name-page.component';


@NgModule({
  declarations: [
    UploadedImagePreviewComponent,
    SmallTextPipe,
    DateDurationPipe,
    FileSizePipe,
    MaritalStatusPipe,
    DragDropUploadDirective,
    NamePageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    // Biblioteca UI Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatExpansionModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatRippleModule,
    MatRadioModule,
    MatBottomSheetModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,

    NgxMaskDirective,
    NgxMaskPipe,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-atom' }),
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatExpansionModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatRippleModule,
    MatRadioModule,
    MatBottomSheetModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,

    NgxMaskDirective,
    NgxMaskPipe,

    NgxSpinnerModule,
    ToastrModule,

    UploadedImagePreviewComponent,
    NamePageComponent,
    SmallTextPipe,
    DateDurationPipe,
    FileSizePipe,
    MaritalStatusPipe,
    DragDropUploadDirective
  ],
  providers: [
    ListMaritalStatusService,
    ListGendersService,
    provideEnvironmentNgxMask(),
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { 
        displayDefaultIndicatorType: false,
        showError: true
      }
    }
  ]
})
export class SharedModule {}