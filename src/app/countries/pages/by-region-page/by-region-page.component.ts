import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/countries.interface';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent implements OnInit{
  public countries : Country[] = []
  public isLoading : boolean = false;
  constructor(private countriesService : CountriesService){}
  
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
    this.regionSelected = this.countriesService.cacheStore.byRegion.region
    }
    
  public regions : Region[] = ['Africa','Americas','Asia','Europe','Oceania']
  public regionSelected? : Region;
  searchByRegion(region : Region)
  {
    this.regionSelected = region;
    this.isLoading = true;
     const response = this.countriesService.searchRegion(region)
     .subscribe(region => {this.countries = region;this.isLoading = false} )
  }
}
