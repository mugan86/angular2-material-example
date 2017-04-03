import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  spaceScreens: Array<any>;

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
