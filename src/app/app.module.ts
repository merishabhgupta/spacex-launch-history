import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LaunchDataComponent } from './launch-data/launch-data.component';
import { LaunchDataService } from './launch-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ShuttleInfoComponent } from './shuttle-info/shuttle-info.component';
import { CustomBreakpointsModule } from './custom-breakpoints/custom-breakpoints.module';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    LaunchDataComponent,
    ShuttleInfoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    CustomBreakpointsModule,
    AppMaterialModule
  ],
  providers: [LaunchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
