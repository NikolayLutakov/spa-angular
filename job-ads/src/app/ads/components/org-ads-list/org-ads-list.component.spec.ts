import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdsListComponent } from './org-ads-list.component';

describe('OrgAdsListComponent', () => {
  let component: OrgAdsListComponent;
  let fixture: ComponentFixture<OrgAdsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgAdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
