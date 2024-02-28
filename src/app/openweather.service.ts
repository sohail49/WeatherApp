import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  private apiKey = '482944e26d320a80bd5e4f23b3de7d1f';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http:HttpClient) { }

  getweather(city: string) {
    // return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=482944e26d320a80bd5e4f23b3de7d1f&units='+ units +'');
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=imperial`);
  }

  getWeatherForecast(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=imperial`);
  }
}
