import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingPageEightComponent } from './branding-page-eight.component';

describe('BrandingPageFiveComponent', () => {
  let component: BrandingPageEightComponent;
  let fixture: ComponentFixture<BrandingPageEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandingPageEightComponent]
    });
    fixture = TestBed.createComponent(BrandingPageEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
