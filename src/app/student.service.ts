import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import{Student} from './student'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private basePath = 'http://localhost:8090/rest/adduser';

  constructor(private http: HttpClient) { }

  getAllAddusers(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.basePath}/all`);
  }

  deleteOneAdduser(id: number): Observable<any> {
    return this.http.delete(`${this.basePath}/remove/${id}`, {responseType: 'text'});
  }

  createAdduser(student: Student): Observable<any> {
    return this.http.post(`${this.basePath}/save`,student, {responseType: 'text'});
  }

  getOneAdduser(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.basePath}/one/${id}`);
  }

  updateAdduser(id: number, student: Student): Observable<any> {
    return this.http.put(`${this.basePath}/modify/${id}`, student, {responseType : 'text'});
  }
}
