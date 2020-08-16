import { Component, OnInit, Input } from '@angular/core';
import { ShuttleInfo } from '../model/shuttle-info';

@Component({
  selector: 'app-shuttle-info',
  templateUrl: './shuttle-info.component.html',
  styleUrls: ['./shuttle-info.component.css']
})
export class ShuttleInfoComponent implements OnInit {
  @Input('shuttleInfo') shuttleInfo: ShuttleInfo;
  
  constructor() { }

  ngOnInit() {
  }

}
