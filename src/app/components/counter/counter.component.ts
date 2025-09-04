import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { combineLatest, map, Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  public counterA$: Observable<number>;
  public counterB$: Observable<number>;
  public firstValueToSend: number = 0;
  public secondValueToSend: number = 0;
  public sum$: Observable<number> = of(0);

  constructor(private readonly counterService: CounterService) {
    this.counterA$ = this.counterService.counterA$;
    this.counterB$ = this.counterService.counterB$;
  }

  ngOnInit(): void {
    this.sum$ = combineLatest([this.counterA$, this.counterB$]).pipe(
      map(([a, b]) => a + b)
    )
  }

  handleClick(): void {
    this.counterService.setCounterA(+this.firstValueToSend);
    this.counterService.setCounterB(+this.secondValueToSend);
  }
}
