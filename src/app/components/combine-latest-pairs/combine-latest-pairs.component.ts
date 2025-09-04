import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-combine-latest-pairs',
  imports: [],
  templateUrl: './combine-latest-pairs.component.html',
  styleUrl: './combine-latest-pairs.component.scss'
})
export class CombineLatestPairsComponent implements OnInit {
  sprinterASubject = new BehaviorSubject<number>(0);
  sprinterBSubject = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    combineLatest([this.sprinterASubject, this.sprinterBSubject])
      .subscribe(([sprinterA, sprinterB]) => console.log('sum', sprinterA + sprinterB));

    this.sprinterASubject.next(4);
    this.sprinterBSubject.next(64);
  }
}
