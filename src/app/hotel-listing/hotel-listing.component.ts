import { Component, OnInit, OnDestroy } from '@angular/core';
import { HotelService } from '../hotel.service';
import { IHotel } from '../hotel';
import { Subscription } from 'rxjs';
@Component({
  selector: 'hotel-listing',
  templateUrl: './hotel-listing.component.html',
  styleUrls: ['./hotel-listing.component.scss']
})
export class HotelListingComponent implements OnInit, OnDestroy {

  public hotels:IHotel[];
  subscription:Subscription;
  subscription2:Subscription;
  noOfDays:number;
  arr:IHotel[];
  constructor(private hotelService:HotelService) {
    
   }

  ngOnInit() {
    this.getHotels();
    this.subscription2 = this.hotelService.noOfDaysChange.subscribe(val=>this.noOfDays=val);
    this.hotelService.arr3Change.subscribe(val=>this.arr=val);
  }
  async getHotels(){
    await this.hotelService.getFilteredHotels();
    this.hotels = this.hotelService.filteredHotels;
    this.subscription = this.hotelService.filteredHotelsChange.subscribe(value=>this.hotels=value);
    
  }
  ngOnDestroy(){
    this.subscription2.unsubscribe();
    this.subscription.unsubscribe();
  }

}