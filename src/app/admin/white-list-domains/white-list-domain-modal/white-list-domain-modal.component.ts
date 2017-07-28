import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-white-list-domain-modal',
  templateUrl: './white-list-domain-modal.component.html',
  styleUrls: ['./white-list-domain-modal.component.css']
})
export class WhiteListDomainModalComponent implements OnInit {

  title: string = "Add New WhiteList Domain";
  
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
