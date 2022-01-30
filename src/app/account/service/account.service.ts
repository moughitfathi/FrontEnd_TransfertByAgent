import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountUrl: string;
  constructor(private http: HttpClient) {
    //need to change
    this.accountUrl = 'http://localhost:8088/AGENT-SERVICE/agent/compte';
  }
  /*   public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl + 's');
  } */
  
  public findAll(code: string): Observable<Account[]> {
    return this.http.get<Account[]>(
      'http://localhost:8088/AGENT-SERVICE/agent/client/' + code + '/comptes'
    );
  }

  //need to change
  public findAccount(code: string): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl + 's?id=' + code);
  }

  public save(account: Account, code: string) {
    return this.http.post<Account>('http://localhost:8088/AGENT-SERVICE/agent/client/' + code + '/comptes', account);
  }

  //need to change
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.accountUrl}/${id}`);
  }

}
