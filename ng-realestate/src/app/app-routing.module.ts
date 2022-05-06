import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './charts/chart.component';
import { HomesComponent } from "./homes/homes.component";

const routes: Routes = [
  { path: 'homes', component: HomesComponent },
  { path: 'charts', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
