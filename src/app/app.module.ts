import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarsListComponent} from "./cars-list/cars-list.component";
import {RouterModule} from "@angular/router";
import {MainSearchComponent} from "./main-page/main-search/main-search.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      {path: 'cars', component: CarsListComponent}
    ])
  ],
   declarations: [
      AppComponent,
      NavBarComponent,
      MainPageComponent,
      MainSearchComponent,
      CarsListComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
