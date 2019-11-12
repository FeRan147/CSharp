import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GvSwitchComponent } from './gv-switch.component';

describe('GvSwitchComponent', () => {
  let component: GvSwitchComponent;
  let fixture: ComponentFixture<GvSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GvSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
