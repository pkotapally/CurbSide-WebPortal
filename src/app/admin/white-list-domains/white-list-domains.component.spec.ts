import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteListDomainsComponent } from './white-list-domains.component';

describe('WhiteListDomainsComponent', () => {
  let component: WhiteListDomainsComponent;
  let fixture: ComponentFixture<WhiteListDomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteListDomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteListDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
