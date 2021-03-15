import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {BookService} from './book.service';
import {Book} from './book';
import {StudentService} from './student.service'
import {Student} from './student';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValidationService { 
  constructor( private bookservice:BookService,private studentservice:StudentService){}
  bookflag:boolean;
  stuflag:boolean;
  book:Book;
  showbook:boolean;
  
  async validateBookId(userControl: AbstractControl):Promise<{ [key: string]: boolean } | null>{
      await this.bookservice.getOneBook(userControl.value).subscribe(
       data => {
          this.bookflag=false;
          this.book=data;
          this.showbook=false;

        }, error => {      
         this.bookflag=true;
         this.book=null;
         this.showbook=true;
       }
      );
      return  new Promise(resolve => {
             setTimeout(() => {
                    if(this.bookflag){
                     resolve({userNameNotAvailable:true});
                    }else{
                      resolve(null);
                    }
                     
             },1000);
           });
    }
    async validateStuId(userControl: AbstractControl):Promise<{ [key: string]: boolean } | null>{
      await this.studentservice.getOneAdduser(userControl.value).subscribe(
       data => {
          this.stuflag=false;

        }, error => {      
         this.stuflag=true;
       }
      );
      return  new Promise(resolve => {
             setTimeout(() => {
                    if(this.stuflag){
                      console.log("here")
                     resolve({userNotAvailable:true});
                    }else{
                      resolve(null);
                    }
                     
             },1000);
           });
    }
}


