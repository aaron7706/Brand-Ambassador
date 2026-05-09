import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingPageSevenComponent } from './branding-page-seven.component';

describe('BrandingPageSevenComponent', () => {
  let component: BrandingPageSevenComponent;
  let fixture: ComponentFixture<BrandingPageSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandingPageSevenComponent]
    });
    fixture = TestBed.createComponent(BrandingPageSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
