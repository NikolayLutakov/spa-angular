import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccManageComponent } from './user-acc-manage.component';

describe('UserAccManageComponent', () => {
  let component: UserAccManageComponent;
  let fixture: ComponentFixture<UserAccManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
