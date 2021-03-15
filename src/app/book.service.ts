import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private basePath = 'http://localhost:8090/rest/book';

  constructor(private http: HttpClient) { }


  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.basePath}/all`);
  }

  deleteOneBook(id: number): Observable<any> {
    return this.http.delete(`${this.basePath}/remove/${id}`, {responseType: 'text'});
  }

  createBook(book: Book): Observable<any> {
    return this.http.post(`${this.basePath}/save`, book, {responseType: 'text'});
  }

  getOneBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.basePath}/one/${id}`);
  }

  updateBook(id: number, book: Book): Observable<any> {
    return this.http.put(`${this.basePath}/modify/${id}`, book, {responseType : 'text'});
  }

}