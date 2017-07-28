import { Component, OnInit } from '@angular/core';

import { WhiteListEmails } from '../../modals/white-list-emails.modal';

import { WhiteListService } from '../services/white-list.service';

import { BsModalService } from 'ngx-bootstrap/modal';

import { WhiteListEmailModalComponent } from './white-list-email-modal/white-list-email-modal.component';

@Component({
  selector: 'app-white-list-emails',
  templateUrl: './white-list-emails.component.html',
  styleUrls: ['./white-list-emails.component.css']
})
export class WhiteListEmailsComponent implements OnInit {
  whiteListEmails: Array<WhiteListEmails>;

  constructor(
    private whiteListService : WhiteListService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit() {
    this.getWhiteListEmails();
  };

  public openWhiteListEmailModal() {
    this.bsModalService.show(WhiteListEmailModalComponent);
  }

  getWhiteListEmails(){
     this.whiteListService.getWhiteListEmails()
    .subscribe(result => {
      this.whiteListService.whiteListEmails = result;
    })
  };

  /*addNewWhiteListEmail(){
    
  };*/

  removeWhiteListEmailWithId(whiteListEmail){
    this.whiteListService.removeWhiteListEmailWithId(whiteListEmail)
    .subscribe(result => this.whiteListService.whiteListEmails = result)
  };
}
