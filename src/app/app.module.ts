import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainSearchComponent } from './main-search/main-search.component';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      NgMultiSelectDropDownModule.forRoot()
   ],
   declarations: [
      AppComponent,
      NavBarComponent,
      MainSearchComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
