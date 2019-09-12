import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  myForm:FormGroup;
  dropdownOptions:string[];
  constructor(private hotelService:HotelService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      stdate: new FormControl(),
      endate: new FormControl(),
      selectData: new FormControl()
   });
   this.hotelService.getHotelCities().then(c=>{this.dropdownOptions=c;});
  }
  onSubmit():void{
    this.hotelService.searchHotelsByDatesAndCity(this.myForm.value.selectData,this.myForm.value.stdate,this.myForm.value.endate);
  }
}
