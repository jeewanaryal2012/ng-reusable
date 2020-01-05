import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTypeaheadComponent } from './multi-typeahead.component';

describe('MultiTypeaheadComponent', () => {
  let component: MultiTypeaheadComponent;
  let fixture: ComponentFixture<MultiTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
