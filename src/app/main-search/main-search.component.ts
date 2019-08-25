import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.sass']
})
export class MainSearchComponent implements OnInit {
  searchForm;
  searchCriteriaInJson;
  priceOptions: string[] = ['40 000', '50 000', '60 000', '70 000', '80 000', '100 000', '120 000', '140 000', '160 000'];

  brandDropdownData = [
    {item_id: 1, item_text: 'Audi'},
    {item_id: 2, item_text: 'Citroen'},
    {item_id: 3, item_text: 'Dacia'},
    {item_id: 4, item_text: 'Fiat'},
    {item_id: 5, item_text: 'Ford'},
    {item_id: 6, item_text: 'Mazda'},
    {item_id: 7, item_text: 'Opel'},
    {item_id: 8, item_text: 'Skoda'}
  ];

  segmentDropdownData = [
    {item_id: 1, item_text: 'A - Samochody miejskie'},
    {item_id: 2, item_text: 'B - Samochody małe'},
    {item_id: 3, item_text: 'C - Samochody kompaktowe'},
    {item_id: 4, item_text: 'D - Klasa średnia'},
    {item_id: 5, item_text: 'E - Klasa wyższa-średnia'},
    {item_id: 6, item_text: 'F - Klasa wyższa'},
  ];

  carbodyDropdownData = [
    {item_id: 1, item_text: 'Hatchback'},
    {item_id: 2, item_text: 'Sedan'},
    {item_id: 3, item_text: 'Kombi'},
    {item_id: 4, item_text: 'SUV'},
  ];

  fuelDropdownData = [
    {item_id: 1, item_text: 'Benzyna'},
    {item_id: 2, item_text: 'Diesel'},
    {item_id: 3, item_text: 'Benzyna + LPG'},
    {item_id: 4, item_text: 'Hybryda'},
    {item_id: 5, item_text: 'Elektryczny'},
  ];

  dropdownSettings = {
    singleSelection: false,
    enableCheckAll: false,
    idField: 'item_id',
    textField: 'item_text',
    itemsShowLimit: 3,
  };



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
