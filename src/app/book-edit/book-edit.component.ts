import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id: number;
  book: Book;

  // inject service and acivated Route param
  constructor(private service: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // read id sent by all component as /edit/id
    // tslint:disable-next-line: no-string-literal
    this.id = this.activatedRoute.snapshot.params['id'];
    // make service call to get student object
    this.service.getOneBook(this.id).subscribe(
      data => {
      this.book = data;
      console.log(this.book);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  updateBook() {
    this.service.updateBook(this.id, this.book)
    .subscribe( data => {
      console.log(data);
      this.router.navigate(['all']);
    });
  }

}