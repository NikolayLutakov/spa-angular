import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAccManageComponent } from './org-acc-manage.component';

describe('OrgAccManageComponent', () => {
  let component: OrgAccManageComponent;
  let fixture: ComponentFixture<OrgAccManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAccManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgAccManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
