import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor() { }

  getCountries() {
    return [
      {
        "country": "Afghanistan"
      },
      {
        "country": "Albania"
      },
      {
        "country": "Algeria"
      }
    ];
  }
}
