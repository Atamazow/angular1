import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conec1Component } from './conec1.component';

describe('Conec1Component', () => {
  let component: Conec1Component;
  let fixture: ComponentFixture<Conec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
