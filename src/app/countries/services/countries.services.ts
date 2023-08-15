import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, count, map, of } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {
    private url:string = 'https://restcountries.com/v3.1'
    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode(code:string):Observable<Country | null>
    {
        return this.http.get<Country[]>(`${this.url}/alpha/${code}`)
        .pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError(() => of(null))
        );
    }
    searchCapital(term : string) : Observable<Country[]>
    {
        return this.http.get<Country[]>(`${this.url}/capital/${term}`)
        .pipe(
            catchError(() => of([]))
        );
    }
    searchCountry(term : string) : Observable<Country[]>
    {
        return this.http.get<Country[]>(`${this.url}/name/${term}`)
        .pipe(
            catchError(() => of([]))
        );
    }
    searchRegion(term : string) : Observable<Country[]>
    {
        return this.http.get<Country[]>(`${this.url}/region/${term}`)
        .pipe(
            catchError(() => of([]))
        );
    }
    
}