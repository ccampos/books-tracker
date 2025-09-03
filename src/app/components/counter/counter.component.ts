import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { combineLatest, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  public counterA$: Observable<number>;
  public counterB$: Observable<number>;
  public firstValueToSend: number = 0;
  public secondValueToSend: number = 0;
  public result: number = 0;

  constructor(private readonly counterService: CounterService) {
    this.counterA$ = this.counterService.counterA$;
    this.counterB$ = this.counterService.counterB$;
  }

  ngOnInit(): void {
     combineLatest([this.counterA$, this.counterB$]).subscribe(([counterA, counterB]) => {
      console.log(counterA, counterB);
      this.result = Number(counterA) + Number(counterB);
     })
  }

  handleClick(): void {
    this.counterService.setCounterA(this.firstValueToSend);
    this.counterService.setCounterB(this.secondValueToSend);
  }
}
