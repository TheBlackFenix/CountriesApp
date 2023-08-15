import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.services';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  
public country? : Country | null

  constructor(
    private activatedRoute : ActivatedRoute,
    private countriesService: CountriesService,
    private router : Router){}
  
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe(country => 
      {
        if(!country){
          this.router.navigateByUrl('')
        }
          return this.country = country
      }
    )
  }

  // searchCountry(code:string)
  // {
  //   this.countriesService.searchCountryByAlphaCode(code).subscribe(countries =>
  //     {
  //       console.log(countries)
  //     })
  // }
}
