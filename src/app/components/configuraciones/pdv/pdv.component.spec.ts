import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PdvComponent } from './pdv.component';

describe('PdvComponent', () => {
  let component: PdvComponent;
  let fixture: ComponentFixture<PdvComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
