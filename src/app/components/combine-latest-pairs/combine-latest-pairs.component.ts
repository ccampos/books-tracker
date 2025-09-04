import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-combine-latest-pairs',
  imports: [],
  templateUrl: './combine-latest-pairs.component.html',
  styleUrl: './combine-latest-pairs.component.scss'
})
export class CombineLatestPairsComponent implements OnInit {
  clock$ = interval(1000);
  extra$ = new BehaviorSubject(0);

  ngOnInit(): void {
    combineLatest([this.clock$, this.extra$])
      .subscribe(([time, extra]) => console.log('total', time + extra));

      this.extra$.next(100);
  }
}
