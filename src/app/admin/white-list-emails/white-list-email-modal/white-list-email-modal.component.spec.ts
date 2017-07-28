import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteListEmailModalComponent } from './white-list-email-modal.component';

describe('WhiteListEmailModalComponent', () => {
  let component: WhiteListEmailModalComponent;
  let fixture: ComponentFixture<WhiteListEmailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteListEmailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteListEmailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
