import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private apiUrl = "";
  constructor(private httpClient: HttpClient) { }

  //CRUD Functionality

  createCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    return this.httpClient.post<CreditCard>(this.apiUrl, creditCard);
  }

  getCreditCards(): Observable<CreditCard[]>{
    return this.httpClient.get<CreditCard[]>(this.apiUrl);
  }

  getCreditCardById(id: Number): Observable<CreditCard>{
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<CreditCard>(url);
  }

}
