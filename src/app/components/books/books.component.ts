import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { combineLatest, filter, map, Observable, startWith } from 'rxjs';
import { Volume } from '../../interfaces/volume.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [ReactiveFormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit {
  public searchTerm: string = '';
  public filters: string[] = [];
  public books: Volume[] | undefined;
  public filtersForm!: FormGroup;
  public categoryFilter$!: Observable<string>;

  constructor(
    private readonly booksService: BooksService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filtersForm = this.formBuilder.group({
      category: ['', Validators.minLength(3)],
      avgRating: ['4']
    });
    const categoryCtrl = this.filtersForm.get('category')!;
    this.categoryFilter$ = categoryCtrl.valueChanges.pipe(
      startWith(categoryCtrl.value)
    );
    this.booksService.getInitialBooks().subscribe(books => {
      this.books = books
      console.log(this.books);
    });
  }

  searchBooks(): void {
    // const filters$ = this.booksService.getFilters();
    const books$ = this.booksService.getBooks('moby');
    combineLatest([this.categoryFilter$, books$]).pipe(
      map(([categoryFilter, books]) => {
        return [categoryFilter, books];
      })
    ).subscribe(([categoryFilter, books]) => {
      console.log('*****', categoryFilter, books);
    })
  }

  hasHighRating(book: Volume): boolean {
    return !!book.volumeInfo?.averageRating && book.volumeInfo.averageRating >= 4;
  }
}
