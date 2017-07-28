import { Component, OnInit } from '@angular/core';

import { WhiteListDomains } from '../../modals/white-list-domains.modal';

import { WhiteListService } from '../services/white-list.service';

import { BsModalService } from 'ngx-bootstrap/modal';

import { WhiteListDomainModalComponent } from './white-list-domain-modal/white-list-domain-modal.component';


@Component({
  selector: 'app-white-list-domains',
  templateUrl: './white-list-domains.component.html',
  styleUrls: ['./white-list-domains.component.css']
})
export class WhiteListDomainsComponent implements OnInit {
  whiteListDomains: Array<WhiteListDomains>;

  constructor(
    private whiteListService : WhiteListService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit() {
    this.getWhiteListDomains();
  }  

  public openWhiteListDomainModal() {
    this.bsModalService.show(WhiteListDomainModalComponent);
  }

  getWhiteListDomains(){
     this.whiteListService.getWhiteListDomains()
    .subscribe(result => {
      this.whiteListService.whiteListDomains = result;
    })
  }

  removeWhiteListDomainWithId(whiteListDomain){
    this.whiteListService.removeWhiteListDomainWithId(whiteListDomain)
    .subscribe(result => this.whiteListService.whiteListDomains = result)
  }

}
