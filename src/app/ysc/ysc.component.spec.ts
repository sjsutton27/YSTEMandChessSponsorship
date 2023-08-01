import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YscComponent } from './ysc.component';

describe('YscComponent', () => {
  let component: YscComponent;
  let fixture: ComponentFixture<YscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YscComponent]
    });
    fixture = TestBed.createComponent(YscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
