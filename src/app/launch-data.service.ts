import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShuttleInfo } from './model/shuttle-info';
import { FilterData } from './model/fiter-data';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchDataService {

  spacexShuttlInfoBaseUrl = 'https://api.spaceXdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  public getDefaultData(filterData: FilterData): Observable<ShuttleInfo[]> {
    let httpParams: HttpParams;
    if (filterData.launchYear && filterData.successfulLaunch && filterData.successfulLanding){
      httpParams = new HttpParams().set('limit', '100')
        .append('launch_year', filterData.launchYear)
        .append('launch_success', filterData.successfulLaunch)
        .append('land_success', filterData.successfulLanding);

    }else if (filterData.launchYear && filterData.successfulLaunch){
      httpParams = new HttpParams().set('limit', '100')
        .append('launch_year', filterData.launchYear)
        .append('launch_success', filterData.successfulLaunch);

    } else if (filterData.launchYear){
      httpParams = new HttpParams().set('limit', '100')
        .append('launch_year', filterData.launchYear);
    }else{
      httpParams = new HttpParams().set('limit', '100');
    }
    return this.http.get<ShuttleInfo[]>(`${this.spacexShuttlInfoBaseUrl}`, {params: httpParams});
  }
}
