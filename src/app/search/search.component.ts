import { Component, OnInit, OnDestroy } from '@angular/core';
import { HotelService } from '../hotel.service';
import { IHotel } from '../hotel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit , OnDestroy{
  constructor(private hotelService:HotelService) { }

  ngOnInit() {
  }
  async filter(query:string){
    await this.hotelService.getFilteredHotels(query);
  }
  ngOnDestroy(){
    
  }
}
