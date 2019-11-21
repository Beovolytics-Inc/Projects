import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class IntroOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buyBeovolytics() {
    window.open('https://beovolytics.eu/shop/item/beovolytics-angular-4-material-design-admin-template/20161805?ref=bitwizard');
  }
  getBEOVOLYTICSLandingpage() {
    window.open('');
  }
}
