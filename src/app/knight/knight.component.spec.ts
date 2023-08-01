import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightComponent } from './knight.component';

describe('KnightComponent', () => {
  let component: KnightComponent;
  let fixture: ComponentFixture<KnightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnightComponent]
    });
    fixture = TestBed.createComponent(KnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
