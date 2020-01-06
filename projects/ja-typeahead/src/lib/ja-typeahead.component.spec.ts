import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaTypeaheadComponent } from './ja-typeahead.component';

describe('JaTypeaheadComponent', () => {
  let component: JaTypeaheadComponent;
  let fixture: ComponentFixture<JaTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
