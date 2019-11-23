import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class IntroOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buyService() {
    window.open('https://www.beovolytics.eu/store/services/');
  }
  portfolio() {
    window.open('https://www.beovoltics.eu/works/portfolio');
  }
}
