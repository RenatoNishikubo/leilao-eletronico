import { environment } from './../../environments/environment';
import { Produtos } from './../interfaces/produtos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  private readonly API = `${environment.API}produtos`;
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Produtos[]>(this.API)
    // .pipe(
    //   delay(2000),
    //   tap(console.log)
    // );
  }

  create(produto: any) {
    return this.http.post(this.API, produto).pipe(take(1));
  }
}
