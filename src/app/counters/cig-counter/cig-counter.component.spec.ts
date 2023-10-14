import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigCounterComponent } from './cig-counter.component';

describe('CigCounterComponent', () => {
  let component: CigCounterComponent;
  let fixture: ComponentFixture<CigCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CigCounterComponent]
    });
    fixture = TestBed.createComponent(CigCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
