import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private readonly counterASubject = new BehaviorSubject<number>(0);
  public readonly counterA$ = this.counterASubject.asObservable();

  private readonly counterBSubject = new BehaviorSubject<number>(0);
  public readonly counterB$ = this.counterBSubject.asObservable();

  constructor() { }

  setCounterA(a: number): void {
    this.counterASubject.next(a);
  }

  setCounterB(b: number): void {
    this.counterBSubject.next(b);
  }
}
