import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{


  constructor(private countriesServices : CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountries.countries
    this.initialValue = this.countriesServices.cacheStore.byCountries.term
  }
  
  countries : Country[] = []
  public initialValue : string = ''
  public isLoading : boolean = false;

  searchByCountry(term : string)
  {
    this.isLoading = true;
    const response =this.countriesServices.searchCountry(term)
                      .subscribe( countries => {this.countries = countries; this.isLoading = false});
  }
}
