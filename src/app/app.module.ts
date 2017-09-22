import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { MenuComponent } from './menu/menu.component';
import { DeveloperComponent } from './developer/developer.component';
import { CarInfoComponent } from './car-info/car-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars-list', pathMatch: 'full' },
  { path: 'cars-list', component: CarsListComponent },
  { path: 'info/:id', component: CarInfoComponent },
  { path: 'developer', component: DeveloperComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    MenuComponent,
    DeveloperComponent,
    CarInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
