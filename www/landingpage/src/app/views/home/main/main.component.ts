import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(
  ) { }

  ngOnInit() {
    // scrollTo('app-root');
  }
  ngOnDestroy() {
  }

  main() {
    window.open('https://beovolytics-ui-lib.com/downloads/beovolytics-html5-free-landing-page/');
  }

}
