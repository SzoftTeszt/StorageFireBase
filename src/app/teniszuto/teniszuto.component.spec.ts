import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeniszutoComponent } from './teniszuto.component';

describe('TeniszutoComponent', () => {
  let component: TeniszutoComponent;
  let fixture: ComponentFixture<TeniszutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeniszutoComponent]
    });
    fixture = TestBed.createComponent(TeniszutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
