import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-search-weather-display',
  templateUrl: './search-weather-display.component.html',
  styleUrl: './search-weather-display.component.css'
})
export class SearchWeatherDisplayComponent {

  cityNameSearch: string = '';
  searchWeatherData: any = [];

  constructor(private FB: FormBuilder) {}

  async search() {
    try {
      this.searchWeatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityNameSearch}&appid=482944e26d320a80bd5e4f23b3de7d1f&units=imperial`);
      this.cityNameSearch = '';
    } catch (error) {
    }
  }

}
