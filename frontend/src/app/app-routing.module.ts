import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEFAULT_ROUTE,HOME_ROUTE, COMPOUND_DETAILS_ROUTE } from './constants/routes';

import { HomeComponent } from './pages/home/home.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';

const routes: Routes = [
  { path: DEFAULT_ROUTE, component: HomeComponent },
    { path: HOME_ROUTE, component: HomeComponent },
    { path: COMPOUND_DETAILS_ROUTE, component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
