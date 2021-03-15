import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookAllComponent } from './book-all/book-all.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IssuebooksComponent } from './issuebooks/issuebooks.component';
import{BookService} from './book.service';
import { ValidationService } from './validation.service';
import {Book} from './book'

@NgModule({
  declarations: [
    AppComponent,
    BookAllComponent,
    BookCreateComponent,
    BookEditComponent,
    IssuebooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookService,ValidationService,Book],
  bootstrap: [AppComponent]
})
export class AppModule { }
