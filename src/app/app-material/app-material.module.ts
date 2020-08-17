import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDividerModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatCardModule,
  ]
})
export class AppMaterialModule { }
