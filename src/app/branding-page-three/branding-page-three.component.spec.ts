import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingPageThreeComponent } from './branding-page-three.component';

describe('BrandingPageThreeComponent', () => {
  let component: BrandingPageThreeComponent;
  let fixture: ComponentFixture<BrandingPageThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandingPageThreeComponent]
    });
    fixture = TestBed.createComponent(BrandingPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
