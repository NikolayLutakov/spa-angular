import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdItemComponent } from './org-ad-item.component';

describe('OrgAdItemComponent', () => {
  let component: OrgAdItemComponent;
  let fixture: ComponentFixture<OrgAdItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgAdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
