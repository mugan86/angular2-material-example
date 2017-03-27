import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {TranslateService} from 'ng2-translate';

//To Autocomplete component use
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Material Example';

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

    this.http.get('./src/data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);

 
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
    
    console.log(this.spaceScreens[i].liked);
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
    console.log(i);
  }

  //Select language action with radio button

  changeLanguage(lang)
  {
    localStorage.setItem('selectLanguage', lang);
  }
}
