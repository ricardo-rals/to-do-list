import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  createData(task: string, done: boolean) {
    return this.http.post(
      this.api.concat('tasks/'), { task, done }
    );
  }

  readData() {
    return this.http.get(this.api.concat('tasks/'));
  }

  updateData(id: number, done: boolean) {
    return this.http.put(
      this.api.concat(`tasks/${id}/`), { done }
    );
  }

  deleteData(id: number) {
    return this.http.delete(
      this.api.concat(`tasks/${id}/`)
    );
  }
}
