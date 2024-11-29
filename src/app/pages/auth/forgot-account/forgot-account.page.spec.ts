import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotAccountPage } from './forgot-account.page';

describe('ForgotAccountPage', () => {
  let component: ForgotAccountPage;
  let fixture: ComponentFixture<ForgotAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
