import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWeatherDisplayComponent } from './search-weather-display.component';

describe('SearchWeatherDisplayComponent', () => {
  let component: SearchWeatherDisplayComponent;
  let fixture: ComponentFixture<SearchWeatherDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchWeatherDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchWeatherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
