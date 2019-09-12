import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../hotel';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  @Input() hotel:IHotel;
  constructor() { }

  ngOnInit() {
  }

}
