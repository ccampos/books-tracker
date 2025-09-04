import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestPairsComponent } from './combine-latest-pairs.component';

describe('CombineLatestPairsComponent', () => {
  let component: CombineLatestPairsComponent;
  let fixture: ComponentFixture<CombineLatestPairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestPairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
