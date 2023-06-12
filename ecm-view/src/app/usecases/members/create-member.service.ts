import { Injectable } from "@angular/core";
import { HttpEventType } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

import { CreateService } from "../models/create.service";
import { CreateMemberResource } from "src/app/resources/members/create-member.resource";
import { Member } from "src/app/models/member.entity";
import { Affiliation } from "src/app/models/affiliation.entity";
import { Role } from "src/app/models/role.entity";
import { Congregation } from "src/app/models/congregation.entity";

const PERCENTEGE = 100;

@Injectable()
export class CreateMemberService extends CreateService  {

    public progressDone: number = 0;

    public constructor(
        private readonly toastr: ToastrService,
        private readonly create: CreateMemberResource
    ) { super() }

    public getProgressDone(): string {
        return this.progressDone + '%';
    }

    public override run(data: any): void {
        const member: Member = new Member({
            id: null,
            name: data.name,
            cpf: data.cpf,
            rg: data.rg,
            dateOfBirth: new Date(data.dateOfBirth).toISOString(),
            dateOfBaptism: new Date(data.dateOfBaptism).toISOString(),
            phone: data.phone,
            email: data.email,
            gender: data.gender,
            maritalStatus: data.maritalStatus,
            affiliation: new Affiliation({
                id: null,
                fatherName: data.fatherName,
                motherName: data.motherName
            }),
            role: new Role({
                id: data.role.id,
                name: data.role.name,
            }),
            congregation: new Congregation({
                id: data.congregation.id,
                name: data.congregation.name
            }),
            photo: data.photo,
            signature: data.signature
        });
        this.create.run(member).subscribe({
            next: (event) => {
                if(event.type == HttpEventType.UploadProgress) {
                    this.progressDone = Math.round(PERCENTEGE * event.loaded / event.total);
                }
                else if(event.type == HttpEventType.Response) {
                    this.toastr.success('Membro criado com sucesso', 'Tudo ok! :)', { 
                        progressBar: true,
                        positionClass: 'toast-bottom-center'
                    });
                    this.complete.emit(event.body);
                }
            },
            error: (eventErr) => {
                this.toastr.error('O Membro não foi criado', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        })
    }
}