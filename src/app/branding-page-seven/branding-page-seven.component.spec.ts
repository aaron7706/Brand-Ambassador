import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingPageFiveComponent } from './branding-page-five.component';

describe('BrandingPageFiveComponent', () => {
  let component: BrandingPageFiveComponent;
  let fixture: ComponentFixture<BrandingPageFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandingPageFiveComponent]
    });
    fixture = TestBed.createComponent(BrandingPageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
