import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {WhiteListDomainsComponent} from './white-list-domains/white-list-domains.component';
import {WhiteListEmailsComponent} from './white-list-emails/white-list-emails.component';

const adminRoutes: Routes = [
  { path: 'whitelist-domains',  component: WhiteListDomainsComponent },
  { path: 'whitelist-emails', component: WhiteListEmailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AdminRoutingModule {}