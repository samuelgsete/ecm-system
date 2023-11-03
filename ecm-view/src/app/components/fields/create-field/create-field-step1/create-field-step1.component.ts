import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-field-step1',
  templateUrl: './create-field-step1.component.html',
  styleUrls: ['./create-field-step1.component.css']
})
export class CreateFieldStep1Component implements OnInit {

  @Input()
  form!: FormGroup;
  isUploadedLogo: boolean = false;

  ngOnInit(): void {}
}