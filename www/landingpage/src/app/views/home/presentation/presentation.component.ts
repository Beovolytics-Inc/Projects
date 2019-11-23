import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {

  constructor(
  ) { }

  ngOnInit() {
    // scrollTo('app-root');
  }
  ngOnDestroy() {
  }

  whitePaper() {
    window.open('https://www.beovolytics.eu/documents/whitepaper');
  }

}
