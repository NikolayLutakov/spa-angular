import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdApplicantsListComponent } from './ad-applicants-list.component';

describe('AdApplicantsListComponent', () => {
  let component: AdApplicantsListComponent;
  let fixture: ComponentFixture<AdApplicantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdApplicantsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdApplicantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
