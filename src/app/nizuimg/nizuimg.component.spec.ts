import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NizuimgComponent } from './nizuimg.component';

describe('NizuimgComponent', () => {
  let component: NizuimgComponent;
  let fixture: ComponentFixture<NizuimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NizuimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NizuimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
