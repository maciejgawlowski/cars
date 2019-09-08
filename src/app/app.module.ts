import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainSearchComponent } from './main-search/main-search.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarsListComponent} from "./cars-list/cars-list.component";
import {RouterModule} from "@angular/router";

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
      { path: '', component: MainSearchComponent },
      {path: 'cars', component: CarsListComponent}
    ])
  ],
   declarations: [
      AppComponent,
      NavBarComponent,
      MainSearchComponent,
      CarsListComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
