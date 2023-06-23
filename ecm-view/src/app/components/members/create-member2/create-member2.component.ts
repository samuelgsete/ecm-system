import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Congregation } from 'src/app/models/congregation.entity';
import { Member } from 'src/app/models/member.entity';
import { Role } from 'src/app/models/role.entity';
import { BuildFormCreateMemberService } from 'src/app/usecases/members/build-form-create-member.service';
import { CreateMemberService } from 'src/app/usecases/members/create-member.service';
import { ParseDataToMemberService } from 'src/app/usecases/members/parse-data-to-member.service';

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
    readonly buildForm: BuildFormCreateMemberService,
    readonly createMember: CreateMemberService,
    readonly data: ParseDataToMemberService,
  ) { data.component = this }

  ngOnInit(): void {
    const { step1, step2, step3, step4 } = this.buildForm.run();
    this.step1 = step1;
    this.step2 = step2;
    this.step3 = step3;
    this.step4 = step4;
    this.createMember.done().subscribe(response => {
      this.router.navigateByUrl("/app/members");
    })
  }
}