import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'pop-up-menu',
  templateUrl: './pop-up-menu.component.html',
  styleUrls: ['./pop-up-menu.component.scss']
})
export class PopUpMenuComponent {
  menuItems : any;

  constructor(private http:Http, private translate:TranslateService) {
    console.info("Select language: " + localStorage.getItem('selectLanguage'));
    if (localStorage.getItem('selectLanguage') == null || localStorage.getItem('selectLanguage') == "null")
    {
      localStorage.setItem('selectLanguage', 'en');
      console.info("Change language to " + localStorage.getItem('selectLanguage'));
    }

    translate.setDefaultLang(localStorage.getItem('selectLanguage'));

    this.http.get('./src/assets/info/pop-up-menu.json')
      .map(response => response.json().menuitems)
      .subscribe(res => this.menuItems = res);
  }


  //Select language action with radio button

  changeLanguage(lang)
  {
    localStorage.setItem('selectLanguage', lang);
    this.translate.setDefaultLang(lang);
  }
}
