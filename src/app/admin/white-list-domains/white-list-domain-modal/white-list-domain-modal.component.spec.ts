import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteListDomainModalComponent } from './white-list-domain-modal.component';

describe('WhiteListDomainModalComponent', () => {
  let component: WhiteListDomainModalComponent;
  let fixture: ComponentFixture<WhiteListDomainModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteListDomainModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteListDomainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
