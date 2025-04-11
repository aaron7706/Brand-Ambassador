import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoriMoniComponent } from './pori-moni.component';

describe('PoriMoniComponent', () => {
  let component: PoriMoniComponent;
  let fixture: ComponentFixture<PoriMoniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoriMoniComponent]
    });
    fixture = TestBed.createComponent(PoriMoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
