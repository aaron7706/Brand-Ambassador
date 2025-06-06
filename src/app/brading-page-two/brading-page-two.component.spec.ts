import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradingPageTwoComponent } from './brading-page-two.component';

describe('BradingPageTwoComponent', () => {
  let component: BradingPageTwoComponent;
  let fixture: ComponentFixture<BradingPageTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BradingPageTwoComponent]
    });
    fixture = TestBed.createComponent(BradingPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
