import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.sass']
})
export class MainSearchComponent implements OnInit {
  searchForm;
  searchCriteriaInJson;

  priceOptions: string[] = ['40 000', '50 000', '60 000', '70 000', '80 000', '100 000', '120 000', '140 000', '160 000'];
  segmentOptions: string[] = ['A - Samochody miejskie', 'B - Samochody małe', 'C - Samochody kompaktowe', 'D - Klasa średnia', 'E - Klasa wyższa-średnia', 'F - Klasa wyższa'];
  brandOptions: string[] = ['Audi', 'Citroen', 'Dacia', 'Fiat', 'Ford', 'Mazda', 'Opel', 'Skoda'];
  carbodyOptions: string[] = ['Hatchback', 'Sedan', 'Kombi', 'SUV'];
  fuelOptions: string[] = ['Benzyna', 'Diesel', 'Benzyna + LPG', 'Hybryda', 'Elektryczny'];
  powerOptions: string[] = ['60', '80', '100', '120', '140', '160', '200', '240'];
  engineCapacityOptions: string[] = ['1 000', '1 200', '1 400', '1 600', '1 800', '2 000', '2 200', '2 400'];

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      priceFrom: '',
      priceTo: '',
      brands: '',
      segments: '',
      carbodies: '',
      fuels: '',
      powerFrom: '',
      powerTo: '',
      engineCapacityFrom: '',
      engineCapacityTo: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(searchCriteria) {
    console.log('Searching', searchCriteria);
    this.searchCriteriaInJson = searchCriteria;
  }

}
