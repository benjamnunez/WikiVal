import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpraysPage } from './sprays.page';

describe('SpraysPage', () => {
  let component: SpraysPage;
  let fixture: ComponentFixture<SpraysPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpraysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
