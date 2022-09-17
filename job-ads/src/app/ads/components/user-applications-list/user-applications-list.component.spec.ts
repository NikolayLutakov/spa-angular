import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicationsListComponent } from './user-applications-list.component';

describe('UserApplicationsListComponent', () => {
  let component: UserApplicationsListComponent;
  let fixture: ComponentFixture<UserApplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplicationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
