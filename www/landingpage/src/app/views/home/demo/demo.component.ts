import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  constructor(
  ) { }

  ngOnInit() {
    // scrollTo('app-root');
  }
  ngOnDestroy() {
  }

  bitFinance() {
    window.open('https://www.bitfinance.biz');
  }

}
