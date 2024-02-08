import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { BuildFormMember } from 'src/app/usecases/members/build-form-member.service';
import { FindOneMemberService } from 'src/app/usecases/members/find-one-member.service';
import { GetFormDataMemberService } from 'src/app/usecases/members/get-form-data-member.service';
import { UpdateMemberService } from 'src/app/usecases/members/update-member.service';
import { IFormMemberStep1 } from 'src/app/usecases/members/interfaces/form-member-step1.interface';
import { IFormMemberStep2 } from 'src/app/usecases/members/interfaces/form-member-step2.interface';
import { IFormMemberStep3 } from 'src/app/usecases/members/interfaces/form-member-step3.interface';
import { IFormMemberStep4 } from 'src/app/usecases/members/interfaces/form-member-step4.interface';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  step1!: FormGroup<IFormMemberStep1>;
  step2!: FormGroup<IFormMemberStep2>;
  step3!: FormGroup<IFormMemberStep3>;
  step4!: FormGroup<IFormMemberStep4>;
   
  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    readonly titleService: Title,
    readonly buildForm: BuildFormMember,
    readonly findOne: FindOneMemberService,
    readonly formData: GetFormDataMemberService,
    readonly update: UpdateMemberService
  ) { formData.component = this }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.findOne.run(id);
    this.findOne.done().subscribe(response => {
      this.titleService.setTitle(`Editar ${response.name}`);
      const { formStep1, formStep2, formStep3, formStep4 } = this.buildForm.run(response);
      this.step1 = formStep1;
      this.step2 = formStep2;
      this.step3 = formStep3;
      this.step4 = formStep4;
    });
    this.update.done().subscribe(response => {
      this.router.navigateByUrl("app/members");
    })
  }
}