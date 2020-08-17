import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttleInfoComponent } from './shuttle-info.component';
import { AppMaterialModule } from '../app-material/app-material.module';

describe('ShuttleInfoComponent', () => {
  let component: ShuttleInfoComponent;
  let fixture: ComponentFixture<ShuttleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuttleInfoComponent ],
      imports: [AppMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuttleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
