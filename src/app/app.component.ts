import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
cities = ['rio de janeiro', 'beijing', 'los angeles'];

  title = 'Openweather';
}
