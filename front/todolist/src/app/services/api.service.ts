import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  createData() {

  }

  readData() {
    return this.http.get(`${this.api}tasks/`);
  }

  deleteData() {

  }
}
