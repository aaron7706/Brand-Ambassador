import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingPageFourComponent } from './branding-page-four.component';

describe('BrandingPageFourComponent', () => {
  let component: BrandingPageFourComponent;
  let fixture: ComponentFixture<BrandingPageFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandingPageFourComponent]
    });
    fixture = TestBed.createComponent(BrandingPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
