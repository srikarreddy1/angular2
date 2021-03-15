import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Book } from '../book';
import {ValidationService} from '../validation.service' 
import {BookService} from '../book.service'
import { Student } from '../student';

@Component({
  selector: 'app-issuebooks',
  templateUrl: './issuebooks.component.html',
  styleUrls: ['./issuebooks.component.css']
})
export class IssuebooksComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  showBook:boolean=true;
  showstu:boolean=true;
  student:Student;
  book:Book;
  // showBook:boolean=this.validationservice.showBook;
  
  constructor(private formBuilder: FormBuilder,private validationservice:ValidationService,private bookservice:BookService) { }
  ngOnInit(){
    this.form = this.formBuilder.group({
      bookid:['', [Validators.required], this.validationservice.validateBookId.bind(this.validationservice)],
      stuid:['', [Validators.required], this.validationservice.validateStuId.bind(this.validationservice)],
      issuedate:['', [Validators.required]],
      returndate:['', [Validators.required]]
      
    });
  }
  get formcontrols() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      
    }
  } 

     onupdate(event:any){
      setTimeout(() => {
         this.showBook=this.validationservice.showbook;
         this.book=this.validationservice.book;
      },1000);
    }
}
