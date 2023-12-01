import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintAllCredentialsService } from 'src/app/usecases/credentials/print-all-credentials.service';
import { PrintAllCredentialsResource } from 'src/app/resources/credentials/print-all-credentials.resource';
import { PrintOneCredentialsResource } from 'src/app/resources/credentials/print-one-credentials.resource';
import { PrintOneCredentialsService } from 'src/app/usecases/credentials/print-one-credential.service';
import { EmitCredencialsByCongregationResource } from 'src/app/resources/credentials/emit-credentials-by-congregation.resource';
import { EmitCredentialsByCongregationService } from 'src/app/usecases/credentials/emit-credentials-bycongregation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PrintOneCredentialsResource,
    PrintOneCredentialsService,
    PrintAllCredentialsService,
    PrintAllCredentialsResource,
    EmitCredencialsByCongregationResource,
    EmitCredentialsByCongregationService
  ]
})
export class CredentialsModule {}