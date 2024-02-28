import { Component, Input, OnInit, OnChanges, input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OpenweatherService } from '../openweather.service';
import { Subscriber } from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'app-open-weather',
  templateUrl: './open-weather.component.html',
  styleUrl: './open-weather.component.css'
})
export class OpenWeatherComponent implements OnInit{

  units: string = 'imperial';
  weatherData: any= [];
  searchWeatherData: any = [];
  fiveDayWeatherData: any = [];
  fiveDaysData: any = [];
  cities = ['Rio de Janeiro', 'Beijing', 'Los Angeles'];
  iconURL: string = '';

  weatherNow: any ;
  timeline:any =[];
  eiList:any = [];
  
  cityNameSearch: string = '';


  constructor(private openweatherService: OpenweatherService) {
        
  }

  async search() {
    try {
      this.searchWeatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityNameSearch}&appid=482944e26d320a80bd5e4f23b3de7d1f&units=imperial`);
      this.cityNameSearch = '';
    } catch (error) {
    }
  }

  ngOnInit(): void {
    this.getCitiesWeather();
    this.getFutureCitiesForecast();
    this.getFiveDaysForecast();
  }

  dateRange() {
    const start = new Date();
    start.setHours(start.getHours() + (start.getTimezoneOffset() / 60));
    const to = new Date(start);
    to.setHours(to.getHours() + 2, to.getMinutes() + 59, to.getSeconds() + 59);

    return {start, to}
}

  getCitiesWeather() {
      this.cities.forEach(city => {
        this.openweatherService.getweather(city)
          .subscribe(data => {
            this.getTodaysForecast(data);
            // this.getTodaysCityForecast(data);
          });
      });
  }

  getFutureCitiesForecast() {
    this.cities.forEach(city => {
      this.openweatherService.getWeatherForecast(city)
        .subscribe(data => {
          this.getFutureForecast(data);
        });
    });
}

  getFiveDaysForecast (){
    this.cities.forEach(city => {
      this.openweatherService.getWeatherForecast(city)
        .subscribe(data => {
          this.getFiveDayForecast(data);
        });
    });
  }

  getTodaysForecast(weather:any) {
      this.weatherData.push({
        cityName: weather.name,
        cityWeather: weather.weather[0],
        temp: weather.main.temp,
        iconURL: 'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'
      });
  }

  getFutureForecast(today: any) {

    let cityName = today.city.name;
    
    for(const forecast of today.list.slice(0, 8)) {
      this.timeline.push({
        time: forecast.dt_txt,
        temp: forecast.main.temp,
        name: cityName
      });

      const apiData = new Date(forecast.dt_txt).getTime();
      
      if(this.dateRange().start.getTime() <= apiData && this.dateRange().to.getTime() >= apiData) {
        this.weatherNow = forecast;
      }
    }

  }

  getFiveDayForecast(data:any){

    this.eiList.push(data.list);
      for(let i=0; i < 40; i = i+8) {
        this.fiveDayWeatherData.push( {
          name: data.city.name,
          dt_txt: this.eiList[0][i].dt_txt,
          icon: this.eiList[0][i].weather[0].icon,
          temp: this.eiList[0][i].main.temp,
          description: this.eiList[0][i].weather[0].description,
        });
      }
    this.eiList.pop();
    // console.log(this.fiveDayWeatherData);
  }
}
