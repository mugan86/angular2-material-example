import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {TranslateService} from 'ng2-translate';

//To Autocomplete component use
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  //Checkbox
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  
  spaceScreens: Array<any>;

  stateCtrl: FormControl;
  filteredStates: any;

  myState = 'AZ';
 

  states = [
    {code: 'AL', name: 'Alabama'},
    {code: 'AK', name: 'Alaska'},
    {code: 'AZ', name: 'Arizona'},
    {code: 'CA', name: 'California'},
    {code: 'CO', name: 'Colorado'},
    {code: 'CT', name: 'Connecticut'},
    {code: 'DE', name: 'Delaware'}
  ];

  languages = [
    {code: 'en' , label: 'English'},
    {code: 'es' , label: 'Español'},
    {code: 'eu' , label: 'Euskara'}
  ]
  

  language: string = localStorage.getItem('selectLanguage');

  constructor(private http:Http, private translate:TranslateService) {
    console.info("Select language: " + localStorage.getItem('selectLanguage'));
    if (localStorage.getItem('selectLanguage') == null || localStorage.getItem('selectLanguage') == "null")
    {
      localStorage.setItem('selectLanguage', 'en');
      console.info("Change language to " + localStorage.getItem('selectLanguage'));
    }

    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
  }

  //Select language action with radio button

  changeLanguage(lang)
  {
    localStorage.setItem('selectLanguage', lang);
     this.translate.setDefaultLang(lang);
  }
}
