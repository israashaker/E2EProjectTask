import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'sorting-nav',
  templateUrl: './sorting-nav.component.html',
  styleUrls: ['./sorting-nav.component.scss']
})
export class SortingNavComponent implements OnInit {

  constructor(private hotelService:HotelService) { }

  ngOnInit() {
  }
  sortByPrice(){
    this.hotelService.sortHotelsByPrice();
  }
  sortByName(){
    this.hotelService.sortHotelsByName();
  }
}
