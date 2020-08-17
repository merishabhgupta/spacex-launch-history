import { async, ComponentFixture, TestBed, tick, fakeAsync, flushMicrotasks } from '@angular/core/testing';

import { LaunchDataComponent } from './launch-data.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LaunchDataService } from '../launch-data.service';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { ShuttleInfo } from '../model/shuttle-info';
import { of } from 'rxjs';

const fakeShuttleInfo: ShuttleInfo[] = [
  {
    mission_name: "mission_mars",
    flight_number: 2025,
    mission_id: [1,2],
    launch_year: "2025",
    launch_success: true,
    launch_landing: true,
    links: {
      mission_patch_small: "https://humans-of-mars.com"
    }
  }
]

describe('LaunchDataComponent', () => {
  let component: LaunchDataComponent;
  let fixture: ComponentFixture<LaunchDataComponent>;
  let routeStub: ActivatedRouteStub;

  beforeEach(async(() => {
    const launchDataServiceSpy = jasmine.createSpyObj('LaunchDataService', ['getDefaultData']);
    launchDataServiceSpy.getDefaultData.and.returnValue(of(fakeShuttleInfo));

    routeStub = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      declarations: [ LaunchDataComponent ],
      providers: [
        {provide: LaunchDataService, useValue: launchDataServiceSpy},
        {provide: ActivatedRoute, useValue: routeStub}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDataComponent);
    component = fixture.componentInstance;
  });

  it('should create', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component).toBeTruthy();
    })
  }));

  it('should initialize defaultShuttleInfo$ with first api call default data', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      component.defaultShuttleInfo$.subscribe(
        shuttleInfo => expect(shuttleInfo).toBe(fakeShuttleInfo)
      );
    })
  }));


});
