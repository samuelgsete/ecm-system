import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ImageModel } from 'src/app/models/image-model.entity';

@Component({
  selector: 'app-image-fullscreen',
  templateUrl: './image-fullscreen.component.html',
  styleUrls: ['./image-fullscreen.component.css']
})
export class ImageFullscreenComponent implements OnInit {

  protected image!: ImageModel

  constructor(
    protected readonly modalRef: MatDialogRef<ImageFullscreenComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: any,
  ) {}

  ngOnInit(): void {
    this.image = this.data.image;
  }
}