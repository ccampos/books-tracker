import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { GoogleBooksResponse } from '../interfaces/googlebooksresponse.interface';
import { HttpClient } from '@angular/common/http';
import { Volume } from '../interfaces/volume.interface';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  constructor(private readonly http$: HttpClient) {}

  getInitialBooks(): Observable<Volume[] | undefined> {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=a&startIndex=0&maxResults=40';
    return this.http$.get<GoogleBooksResponse>(url).pipe(
      map(res => res.items)
    );
  }

  getBooks(search: string): Observable<Volume[] | undefined> {
    return this.getBooksResponse(search).pipe(
      map((booksResponse: GoogleBooksResponse) => booksResponse.items)
    );
  }

  getBooksResponse(search: string): Observable<GoogleBooksResponse> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`
    return this.http$.get<GoogleBooksResponse>(url);
  }

  getFilters(): Observable<Record<string, string>> {
    return of({category: 'Drama'});
  }
}
