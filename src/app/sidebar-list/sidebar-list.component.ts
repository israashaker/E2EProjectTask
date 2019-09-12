import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HotelService } from '../hotel.service';
import {Options} from 'ng5-slider';

@Component({
  selector: 'sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {
  minPrice:number;
  maxPrice:number;
  value:number=40;
  rangeSliderMaxValue:number=168;
  options:Options={
    floor:0,
    ceil:200,
    step:0.2
  };
  constructor(private hotelService:HotelService) { }

  ngOnInit() {
    this.hotelService.getHotelsMinPrice().then((value)=>{
      this.minPrice = value;
      this.value = this.minPrice
    });
    this.hotelService.getHotelsMaxPrice().then((value)=>{
      this.maxPrice = value;
      this.rangeSliderMaxValue=this.maxPrice
    });
  }
  async getValue(){
    await this.hotelService.searchHotelsByPrice(this.value,this.rangeSliderMaxValue);
  }
}
