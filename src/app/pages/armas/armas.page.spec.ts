import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmasPage } from './armas.page';

describe('ArmasPage', () => {
  let component: ArmasPage;
  let fixture: ComponentFixture<ArmasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
