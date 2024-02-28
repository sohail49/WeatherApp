import { Component, Input, OnInit } from '@angular/core';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrl: './future.component.css'
})
export class FutureComponent {

  @Input() forecasts : any;
  @Input() data : any;

}
