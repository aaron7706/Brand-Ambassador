import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadiaAfrinMinComponent } from './nadia-afrin-min.component';

describe('NadiaAfrinMinComponent', () => {
  let component: NadiaAfrinMinComponent;
  let fixture: ComponentFixture<NadiaAfrinMinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NadiaAfrinMinComponent]
    });
    fixture = TestBed.createComponent(NadiaAfrinMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
