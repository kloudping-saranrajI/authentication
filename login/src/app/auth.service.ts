import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl='http://127.0.0.1:5000/api';
    constructor(private http: HttpClient ) { }
    login(username:string,password:string):Observable<any>{
      return this.http.post<any>(`${this.apiUrl}/login`,{username,password})
    }
    register(username:string,password:string,email:string):Observable<any>{
      return this.http.post<any>(`${this.apiUrl}/register`,{username,password,email})
    }
}
