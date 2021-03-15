import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book;
  // message to ui
  message: string;

  // inject service class
  constructor(private service: BookService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.book = new Book();
  }

  // tslint:disable-next-line: typedef
  createBook() {
    this.service.createBook(this.book)
    .subscribe(data => {
      this.message = data; // read message
      this.book = new Book(); // clear form
    }, error => {
      console.log(error);
    });
  }

}

