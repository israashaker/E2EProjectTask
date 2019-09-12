import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { SearchComponent } from './search/search.component';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelService } from './hotel.service';
import {HttpClientModule} from '@angular/common/http';
import { HotelListingComponent } from './hotel-listing/hotel-listing.component';
import {ValuesPipe} from './transformObjectToArray.pipe';
import { SortingNavComponent } from './sorting-nav/sorting-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';
import {Ng5SliderModule} from 'ng5-slider';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HotelCardComponent,
    SearchComponent,
    SidebarListComponent,
    HotelDetailsComponent,
    HotelListingComponent,
    ValuesPipe,
    SortingNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    Ng5SliderModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
