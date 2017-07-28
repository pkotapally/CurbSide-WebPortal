import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteListEmailsComponent } from './white-list-emails.component';
import { 
  WhiteListEmailModalComponent
} from './white-list-email-modal/white-list-email-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WhiteListEmailsComponent,
    WhiteListEmailModalComponent
  ],
  entryComponents:[WhiteListEmailModalComponent]
})
export class WhiteListEmailsModule { }
