import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Lecturer} from 'src/app/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private http : HttpClient) { }

  getLecturer(){
    return this.http.get<any>("api/lecturer");
  }
}
