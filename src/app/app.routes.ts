import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CounterComponent } from './components/counter/counter.component';
import { CombineLatestPairsComponent } from './components/combine-latest-pairs/combine-latest-pairs.component';

export const routes: Routes = [
    { path: '', component: BooksComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'pairs', component: CombineLatestPairsComponent}
];
