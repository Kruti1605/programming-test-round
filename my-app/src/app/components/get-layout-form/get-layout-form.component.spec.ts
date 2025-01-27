import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLayoutFormComponent } from './get-layout-form.component';

describe('GetLayoutFormComponent', () => {
  let component: GetLayoutFormComponent;
  let fixture: ComponentFixture<GetLayoutFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetLayoutFormComponent]
    });
    fixture = TestBed.createComponent(GetLayoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
