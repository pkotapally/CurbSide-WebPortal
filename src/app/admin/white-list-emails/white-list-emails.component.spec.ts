import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteListEmailsComponent } from './white-list-emails.component';

describe('WhiteListEmailsComponent', () => {
  let component: WhiteListEmailsComponent;
  let fixture: ComponentFixture<WhiteListEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteListEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteListEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
