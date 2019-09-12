import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHotel } from './hotel';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private url: string = "https://api.myjson.com/bins/tl0bp";
  hotels: IHotel[];
  filteredHotels: IHotel[];
  noOfDays:number;
  filteredHotelsChange: Subject<IHotel[]> = new Subject<IHotel[]>();
  noOfDaysChange: Subject<number> = new Subject<number>();
  arr3:IHotel[];
  arr3Change: Subject<IHotel[]> = new Subject<IHotel[]>();
  constructor(private http: HttpClient) {

  }
  getAllHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.url);
  }
  getFilteredHotels(query?: string) {
    return this.getAllHotels().toPromise().then(data => {
      this.hotels = data["hotels"];
      this.filteredHotels = (query) ? this.hotels.filter(h => h.name.toLowerCase().includes(query.toLowerCase())) : this.hotels;
      this.filteredHotelsChange.next(this.filteredHotels);
    })
  }
  sortHotelsByPrice() {
    this.filteredHotels.sort(function (a, b) {
      return a.price - b.price
    });
  }
  sortHotelsByName() {
    this.filteredHotels.sort(function (a, b) {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB)
        return -1
      else if (nameA < nameB)
        return 1
      else
        return 0

    });
  }
  calcDaysBetweenSelectedDateRange(date1, date2) {
   if(date1 && date2){
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.noOfDays= Difference_In_Days;
    this.noOfDaysChange.next(this.noOfDays);
   }
  }
  async getHotelsMinPrice(): Promise<number> {
    await this.getFilteredHotels();
    if (this.filteredHotels != null) {
      return Math.min.apply(null, this.filteredHotels.map(h => h.price));
    }
    else {
      return 0
    }
  }
  async getHotelsMaxPrice(): Promise<number> {
    await this.getFilteredHotels();
    if (this.filteredHotels != null) {
      return Math.max.apply(null, this.filteredHotels.map(h => h.price));
    }
    else {
      return 0
    }
  }
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  async searchHotelsByDatesAndCity(city:string, date1:string, date2:string) {
    this.calcDaysBetweenSelectedDateRange(date1, date2);
    await this.getFilteredHotels();
    date1 = this.convert(date1)
    date2 = this.convert(date2);
    let newArr = [];
    let arr2 = [];
    this.filteredHotels.forEach(i => {
      i.availability.forEach(j => {
        let start = "";
        let end = "";
        start = j["from"];
        end = j["to"];
        start = start.split("-").reverse().join("-");
        end = end.split("-").reverse().join("-");
        newArr.push((date1 >= start && date1 <= end) || (start >= date1 && start <= date2));
      })
      if (i.city== city && newArr.includes(true)) {
        arr2.push(i);
      }
      newArr = [];
    })
    if(city && date1 && date2){
      this.filteredHotels = arr2;
      this.arr3=arr2;
      this.arr3Change.next(this.arr3);
    }
    else if(date1===null && date2===null){
      alert("please enter dates");
    }
    else if(date1===null){
      alert("please enter start date");
    }
    else if(date2===null){
      alert("please enter end date");
    }
    else if(city ===null){
      alert("please enter a city");
    }
    else{
      this.filteredHotels=this.hotels;
    }
    this.filteredHotelsChange.next(this.filteredHotels);
  }
  async searchHotelsByPrice(hotelPrice: number, maxPriceRange: number) {
    await this.getFilteredHotels();
    this.filteredHotels = (hotelPrice) ? this.hotels.filter(h => h.price >= hotelPrice && h.price <= maxPriceRange) : this.hotels;
    this.filteredHotelsChange.next(this.filteredHotels);
  }
  async getHotelCities() {
    await this.getFilteredHotels();
    let cities: string[];
    cities = this.hotels.map(h => h.city)
    return cities;
  }
}

