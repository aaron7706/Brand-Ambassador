import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadiaAfrinMimComponent } from './nadia-afrin-mim.component';

describe('NadiaAfrinMimComponent', () => {
  let component: NadiaAfrinMimComponent;
  let fixture: ComponentFixture<NadiaAfrinMimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NadiaAfrinMimComponent]
    });
    fixture = TestBed.createComponent(NadiaAfrinMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
