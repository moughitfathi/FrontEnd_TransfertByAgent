import { TransferEspece } from '../model/transferEspece';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferEspeceService {
  private transferUrl: string;
  constructor(private http: HttpClient) {
    this.transferUrl = 'http://localhost:8088/AGENT-SERVICE/TransfertEmis';
  }
  public findByStatus(status: string): Observable<TransferEspece[]> {
    return this.http.get<TransferEspece[]>(
      'http://localhost:8088/CLIENT-SERVICE//transfertsByStatus/' + status +""
    );
  }

  public save(transfer: TransferEspece) {
    return this.http.post<TransferEspece>(this.transferUrl , transfer);
  }
  getPDF(invoiceId: number): Observable<Blob> {
    return this.http.get<Blob>(this.transferUrl + 'PDF/' + invoiceId, {
      responseType: 'blob' as 'json',
    });
  }
}
