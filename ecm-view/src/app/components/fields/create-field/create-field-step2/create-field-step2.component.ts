import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-field-step2',
  templateUrl: './create-field-step2.component.html',
  styleUrls: ['./create-field-step2.component.css']
})
export class CreateFieldStep2Component implements OnInit {
    
  @Input()
  form!: FormGroup;
  isUploadedShepherdSignature: boolean = false;

  ngOnInit(): void {}
}