import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { BuildFormMember } from 'src/app/usecases/members/build-form-member.service';
import { FindOneMemberService } from 'src/app/usecases/members/find-one-member.service';
import { ParseDataToMemberService } from 'src/app/usecases/members/parse-data-to-member.service';
import { UpdateMemberService } from 'src/app/usecases/members/update-member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  step1!: FormGroup;
  step2!: FormGroup;
  step3!: FormGroup;
  step4!: FormGroup;
   
  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    readonly titleService: Title,
    readonly buildForm: BuildFormMember,
    readonly findOne: FindOneMemberService,
    readonly data: ParseDataToMemberService,
    readonly update: UpdateMemberService
  ) { data.component = this }

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