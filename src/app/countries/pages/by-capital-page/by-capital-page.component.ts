import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  
  public countries : Country[] = []
  constructor(private countriesService : CountriesService){}

  searchByCapital(term : string){
    const response = this.countriesService.searchCapital(term)
    .subscribe(countries => this.countries = countries);
  }
}
