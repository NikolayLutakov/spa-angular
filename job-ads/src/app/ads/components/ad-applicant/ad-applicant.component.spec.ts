import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdApplicantComponent } from './ad-applicant.component';

describe('AdApplicantComponent', () => {
  let component: AdApplicantComponent;
  let fixture: ComponentFixture<AdApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
