import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {
  databaseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getUsers(field: string, value: string): Observable<any> {
    return this.http.get(`${this.databaseUrl}/users/?${field}=${value}`);
  }

  postUser(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(
      `${this.databaseUrl}/users`,
      JSON.stringify(user),
      httpOptions
    );
  }
}
