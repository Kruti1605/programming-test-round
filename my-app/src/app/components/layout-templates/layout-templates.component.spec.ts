import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTemplatesComponent } from './layout-templates.component';

describe('LayoutTemplatesComponent', () => {
  let component: LayoutTemplatesComponent;
  let fixture: ComponentFixture<LayoutTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutTemplatesComponent]
    });
    fixture = TestBed.createComponent(LayoutTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
