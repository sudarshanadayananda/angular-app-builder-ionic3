import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  iframeSrc: any;

  sanitizer: DomSanitizer;
  url: string = 'https://angular-load-ionic-iframe.stackblitz.io';

  constructor( sanitizer: DomSanitizer ) {
    this.sanitizer = sanitizer;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }
}


