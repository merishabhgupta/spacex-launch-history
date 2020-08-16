import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterData } from '../model/fiter-data';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  toggleValue: string = "hwlloo"
  years_list = []
  filterData: FilterData;

  constructor(
    private router: Router
  ) { 
    this.filterData = {}
  }

  ngOnInit() {
    for(let i = 2006; i<2021; i++) {
      this.years_list.push(i)
    }
  }

  setNewYear(year: string){
    this.filterData.launchYear = year;
    this.router.navigate(['shuttle'], {queryParams: {launchYear: year}, queryParamsHandling: 'merge'});
  }

  successFullLauchToggle(successfullLaunch: string){
    this.filterData.successfulLaunch = successfullLaunch;
    this.router.navigate(['shuttle'], {queryParams: {successFullLaunch: successfullLaunch}, queryParamsHandling: 'merge'});
    console.log(successfullLaunch)
  }

  successFullLandToggle(successfullLand: string) {
    this.filterData.successfulLanding = successfullLand;
    this.router.navigate(['shuttle'], {queryParams: {successFullLanding: successfullLand}, queryParamsHandling: 'merge'});
  }

}
