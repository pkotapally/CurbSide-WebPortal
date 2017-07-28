import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteListDomainsComponent } from './white-list-domains.component';
import { 
  WhiteListDomainModalComponent
} from './white-list-domain-modal/white-list-domain-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WhiteListDomainsComponent,
    WhiteListDomainModalComponent
  ],
  entryComponents:[WhiteListDomainModalComponent],
  exports: [WhiteListDomainsComponent]
})
export class WhiteListDomainsModule { }
