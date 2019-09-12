import { Component, OnInit, Input } from '@angular/core';
import { HotelService } from '../hotel.service';
import { IHotel } from '../hotel';


@Component({
  selector: 'hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit{
  @Input() hotel:IHotel;
  noOfDays:number;
  constructor(private hotelService:HotelService) { }

  ngOnInit() {
    this.noOfDays = this.hotelService.noOfDays;
  }
  priceOfSelectedNights(){
    return this.hotel.price * this.noOfDays;
  }
}
