import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BuildFormMember } from 'src/app/usecases/members/build-form-member.service';
import { CreateMemberService } from 'src/app/usecases/members/create-member.service';
import { ParseDataToMemberService } from 'src/app/usecases/members/parse-data-to-member.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';

@Component({
  selector: 'app-create-member2',
  templateUrl: './create-member2.component.html',
  styleUrls: ['./create-member2.component.css']
})
export class CreateMember2Component implements OnInit {

  step1!: FormGroup;
  step2!: FormGroup;
  step3!: FormGroup;
  step4!: FormGroup;
   
  constructor(
    readonly router: Router,
    readonly titleService: Title,
    readonly buildForm: BuildFormMember,
    readonly createMember: CreateMemberService,
    readonly data: ParseDataToMemberService,
    readonly updateMetrics: DisplayMetricsService
  ) { data.component = this }

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