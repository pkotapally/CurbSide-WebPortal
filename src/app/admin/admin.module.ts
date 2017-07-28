import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { WhiteListService } from './services/white-list.service';

import { WhiteListDomainsModule } from './white-list-domains/white-list-domains.module';
import { WhiteListEmailsModule } from './white-list-emails/white-list-emails.module';
import { AdminRoutingModule } from './admin-routing.module';

import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    WhiteListDomainsModule,
    WhiteListEmailsModule,
    AdminRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [AdminComponent],
  exports: [AdminComponent],
  providers:[WhiteListService]
})
export class AdminModule { }
