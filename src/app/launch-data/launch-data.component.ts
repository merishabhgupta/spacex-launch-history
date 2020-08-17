import { Component, OnInit } from '@angular/core';
import { LaunchDataService } from '../launch-data.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShuttleInfo } from '../model/shuttle-info';
import { FilterData } from '../model/fiter-data';

@Component({
  selector: 'app-launch-data',
  templateUrl: './launch-data.component.html',
  styleUrls: ['./launch-data.component.css']
})
export class LaunchDataComponent implements OnInit {
  defaultShuttleInfo$: Observable<ShuttleInfo[]> ;

  constructor(
    private launchDataService: LaunchDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.defaultShuttleInfo$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        let filterData: FilterData = {};
        if (params.has('launchYear')) {
          filterData.launchYear = params.get('launchYear');
        }
        if (params.has('successFullLaunch')) {
          filterData.successfulLaunch = params.get('successFullLaunch');
        }
        if (params.has('successFullLanding')) {
          filterData.successfulLanding = params.get('successFullLanding');
        }
        return this.launchDataService.getDefaultData(filterData);
      })
    );

  }

}
