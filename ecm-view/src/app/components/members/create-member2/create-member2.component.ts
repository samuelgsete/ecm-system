import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BuildFormMember } from 'src/app/usecases/members/build-form-member.service';
import { CreateMemberService } from 'src/app/usecases/members/create-member.service';
import { GetFormDataMemberService } from 'src/app/usecases/members/get-form-data-member.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';
import { IFormMemberStep1 } from 'src/app/usecases/members/interfaces/form-member-step1.interface';
import { IFormMemberStep2 } from 'src/app/usecases/members/interfaces/form-member-step2.interface';
import { IFormMemberStep3 } from 'src/app/usecases/members/interfaces/form-member-step3.interface';
import { IFormMemberStep4 } from 'src/app/usecases/members/interfaces/form-member-step4.interface';

@Component({
  selector: 'app-create-member2',
  templateUrl: './create-member2.component.html',
  styleUrls: ['./create-member2.component.css']
})
export class CreateMember2Component implements OnInit {

  step1!: FormGroup<IFormMemberStep1>;
  step2!: FormGroup<IFormMemberStep2>;
  step3!: FormGroup<IFormMemberStep3>;
  step4!: FormGroup<IFormMemberStep4>;
   
  constructor(
    readonly router: Router,
    readonly titleService: Title,
    readonly buildForm: BuildFormMember,
    readonly createMember: CreateMemberService,
    readonly formData: GetFormDataMemberService,
    readonly updateMetrics: DisplayMetricsService
  ) { formData.component = this }

  ngOnInit(): void {
    this.titleService.setTitle('Cadastrar novo membro');
    const { formStep1, formStep2, formStep3, formStep4 } = this.buildForm.run(null);
    this.step1 = formStep1;
    this.step2 = formStep2;
    this.step3 = formStep3;
    this.step4 = formStep4;
    this.createMember.done().subscribe(response => {
      this.updateMetrics.run();
      this.router.navigateByUrl("/app/members");
    })
  }
}