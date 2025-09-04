import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, interval, of } from 'rxjs';

@Component({
  selector: 'app-combine-latest-pairs',
  imports: [],
  templateUrl: './combine-latest-pairs.component.html',
  styleUrl: './combine-latest-pairs.component.scss'
})
export class CombineLatestPairsComponent implements OnInit {
  ticker$ = interval(2000);
  colors = ['red', 'yellow', 'green'];
  buttonSubject$ = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    combineLatest([this.ticker$, this.buttonSubject$])
      .subscribe(([ticker, button]) => {
        const index = ticker % this.colors.length;
        console.log('ticker + index + trafficLight + button: ', ticker, index, button, this.colors[index]);
      });
  }

  handleClick(bool: boolean): void {
    this.buttonSubject$.next(bool);
  }
}
