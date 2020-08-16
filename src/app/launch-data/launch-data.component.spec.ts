import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDataComponent } from './launch-data.component';

describe('LaunchDataComponent', () => {
  let component: LaunchDataComponent;
  let fixture: ComponentFixture<LaunchDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
