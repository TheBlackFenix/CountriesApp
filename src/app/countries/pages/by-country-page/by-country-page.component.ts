import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor(private countriesServices : CountriesService){}
  
  countries : Country[] = []
  
  searchByCountry(term : string)
  {
    const response =this.countriesServices.searchCountry(term)
                      .subscribe( countries => this.countries = countries);
  }
}
