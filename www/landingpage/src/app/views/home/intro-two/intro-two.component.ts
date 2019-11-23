import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.component.html',
  styleUrls: ['./intro-two.component.scss']
})
export class IntroTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buyBeovolytics() {
    window.open('https://beovolytics.eu/shop/item/beovolytics-angular-4-material-design-admin-template/20161805?ref=bitwizard');
  }

}
