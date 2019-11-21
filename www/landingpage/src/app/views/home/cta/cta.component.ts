import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  buyEgret() {
    window.open('https://beovolytics.eu/shop/item/beovolytics-angular-4-material-design-admin-template/20161805?ref=bitwizard');
  }
}
