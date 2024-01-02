import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compound, CompoundResponse } from '../constants/type';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const BASE_URL = 'http://localhost:5000/api/compounds';
@Injectable({
  providedIn: 'root'
})

export class CompoundService {
  constructor(private http:HttpClient) { }

  getCompounds(page:number): Observable<any> {
    // console.log(this.BASE_URL + '?pg=' + `${page}`);
    // console.log(this.http.get<CompoundResponse>(this.BASE_URL + '?pg=' + `${page}`));
    return this.http.get(BASE_URL + '?pg='+`${page}`);
  }

  getCompound(id:string): Observable<Compound> {
    return this.http.get<Compound>(BASE_URL + '/' + id);
  }

  addCompound(compound:Compound): Observable<Compound> {
    return this.http.post<Compound>(BASE_URL, compound, httpOptions);
  }

  updateCompound(compound:Compound): Observable<Compound> {
    return this.http.put<Compound>(BASE_URL + '/' + compound.id, compound, httpOptions);
  }

  deleteCompound(id:string): Observable<Compound> {
    return this.http.delete<Compound>(BASE_URL + '/' + id);
  }

}