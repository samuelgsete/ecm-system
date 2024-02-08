import { Injectable, inject } from "@angular/core";

import { BuildFormMemberStep1 } from "./build-form-member-step1.service";
import { BuildFormMemberStep2 } from "./build-form-member-step2.service";
import { BuildFormMemberStep4 } from "./build-form-member-step4.service";
import { BuildFormMemberStep3 } from "./build-form-member-step3.service";
import { FormatDateService } from "src/app/utils/services/format-date.service";
import { Member } from "src/app/models/member.entity";

@Injectable()
export class BuildFormMember {

    private buildFormStep1 = inject(BuildFormMemberStep1);
    private buildFormStep2 = inject(BuildFormMemberStep2);
    private buildFormStep3 = inject(BuildFormMemberStep3);
    private buildFormStep4 = inject(BuildFormMemberStep4);
    private formatDate = inject(FormatDateService);
    
    run(values: Member | null) {
        if(values == null) {
            const formStep1 = this.buildFormStep1.run(null);
            const formStep2 = this.buildFormStep2.run(null);
            const formStep3 = this.buildFormStep3.run(null);
            const formStep4 = this.buildFormStep4.run(null);
            return { formStep1, formStep2, formStep3, formStep4 }
        }

        const formStep1 = this.buildFormStep1.run({
            id: values.id,
            name: values.name,
            isSelected: values.isSelected,
            cpf: values.cpf,
            rg: values.rg,
            dateOfBirth: this.formatDate.run(values.dateOfBirth, 'yyyy-MM-dd'),
            dateOfBaptism: this.formatDate.run(values.dateOfBaptism, 'yyyy-MM-dd'),
            maritalStatus: values.maritalStatus,
            gender: values.gender,
            congregation: values.congregation,
            role: values.role
        });
        const formStep2 = this.buildFormStep2.run({
            phone: values.phone,
            email: values.email
        });
        const formStep3 = this.buildFormStep3.run({
            id: values.affiliation.id,
            fatherName: values.affiliation.fatherName,
            motherName: values.affiliation.motherName
        });
        const formStep4 = this.buildFormStep4.run({
            photo: values.photo,
            signature: values.signature
        });

        return { formStep1, formStep2, formStep3, formStep4 }
    }
}