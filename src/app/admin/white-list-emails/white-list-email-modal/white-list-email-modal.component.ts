import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-white-list-email-modal',
  templateUrl: './white-list-email-modal.component.html',
  styleUrls: ['./white-list-email-modal.component.css']
})
export class WhiteListEmailModalComponent implements OnInit {

  title: string = "Add New WhiteList Email";
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
