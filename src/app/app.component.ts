import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

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
    this.translate.setDefaultLang(localStorage.getItem('selectLanguage'));
  }

}
