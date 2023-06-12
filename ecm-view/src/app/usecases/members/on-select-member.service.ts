import { Injectable } from "@angular/core";

import { Member } from "src/app/models/member.entity";
import { UpdateMemberService } from "./update-member.service";

@Injectable()
export class OnSelectMemberService {

    constructor(private readonly update: UpdateMemberService) {}

    run(selected: boolean, member: Member): void {
        member.isSelected = selected;
        this.update.run(member);
    }
}