import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { LaunchDataComponent } from './launch-data/launch-data.component';


const routes: Routes = [
  {path: 'shuttle', component: LaunchDataComponent},
  {path: '', redirectTo: '/shuttle', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
