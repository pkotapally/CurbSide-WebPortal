import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { WhiteListDomains } from '../../modals/white-list-domains.modal';
import { WhiteListEmails } from '../../modals/white-list-emails.modal';

@Injectable()
export class WhiteListService {
  whiteListDomains: Array<WhiteListDomains>;
  whiteListEmails: Array<WhiteListEmails>;

  constructor(private http: Http) { }

  getWhiteListDomains(): Observable<any>{
    return this.http.get("../../assets/mocks/white-list-domains.mock.json")
        .map((res:Response) => res.json());
  };

  removeWhiteListDomainWithId(whiteListDomain): Observable<any>{
    let length = this.whiteListDomains.length;
    //if(!length){return Observable.of('no records exist')}

    for(let i=0; i<length; i++){
      if(this.whiteListDomains[i].WhitelistDomainId == whiteListDomain.WhitelistDomainId){
        this.whiteListDomains.splice(i, 1);
        break;
      }
    }

    return Observable.of(this.whiteListDomains);
  };

  getWhiteListEmails(): Observable<any>{
    return this.http.get("../../assets/mocks/white-list-emails.mock.json")
        .map((res:Response) => res.json());
  };

  removeWhiteListEmailWithId(whiteListEmail): Observable<any>{
    let length = this.whiteListEmails.length;
    //if(!length){return Observable.of('no records exist')}

    for(let i=0; i<length; i++){
      if(this.whiteListEmails[i].WhitelistEmailId == whiteListEmail.WhitelistEmailId){
        this.whiteListEmails.splice(i, 1);
        break;
      }
    }

    return Observable.of(this.whiteListEmails);
  };
}
