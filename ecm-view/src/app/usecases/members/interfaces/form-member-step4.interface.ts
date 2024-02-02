import { FormControl } from "@angular/forms";
import { ImageModel } from "src/app/models/image-model.entity";

export interface IFormMemberStep4 {
    photo: FormControl<ImageModel | null>;
    signature: FormControl<ImageModel | null>
}