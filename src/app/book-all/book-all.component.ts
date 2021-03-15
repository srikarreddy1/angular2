import { BookService } from '../book.service';
import { Book } from '../book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-all',
  templateUrl: './book-all.component.html',
  styleUrls: ['./book-all.component.css']
})
export class BookAllComponent implements OnInit {
  // send this data to UI
 books: Book[];
  message: string;
  // inject service layer
  constructor(private service: BookService, private router: Router) {
  
   }

  // on page load call this method
  ngOnInit(): void {
    this.getAllBooks();
  }
  // fetch data from backend application using service
  // tslint:disable-next-line: typedef
  getAllBooks() {
    return this.service.getAllBooks()
    .subscribe(
      data => {
        this.books = data;
      }, error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  deleteBook(id: number) {
    if (confirm('Do you want to delete?')) {
      this.service.deleteOneBook(id).subscribe(data => {
        this.message = data;
        this.getAllBooks();
      }, error => {
        console.log(error);
      });
    } else {
      this.message = '';
    }
  }

  // tslint:disable-next-line: typedef
  editBook(id: number) {
    this.router.navigate(['edit', id]);
  }

}

