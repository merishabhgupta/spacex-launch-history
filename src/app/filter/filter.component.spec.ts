import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { Router } from '@angular/router';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let router;

  beforeEach(async(() => {

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [AppMaterialModule],
      providers: [
        {provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = fixture.debugElement.injector.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on setNewYear method call, should navigate to /shuttle?year={year present in filter}', () => {
    component.setNewYear('2025');
    expect(router.navigate).toHaveBeenCalledWith(['shuttle'],{queryParams: {launchYear: '2025'}, queryParamsHandling: 'merge'});

  })

  it('on successFullLauchToggle method call, should navigate to /shuttle?successFullLaunch={true present in filter}', () => {
    component.successFullLauchToggle('true');
    expect(router.navigate).toHaveBeenCalledWith(['shuttle'],{queryParams: {successFullLaunch: 'true'}, queryParamsHandling: 'merge'});

  })

  it('on successFullLandToggle method call, should navigate to /shuttle?successfulLanding={false present in filter}', () => {
    component.successFullLandToggle('false');
    expect(router.navigate).toHaveBeenCalledWith(['shuttle'],{queryParams: {successFullLanding: 'false'}, queryParamsHandling: 'merge'});

  })

});
