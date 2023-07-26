import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankElement } from './../../models/BankElement';

@Injectable()
export class BankElementService {
    elementApiUrl = 'https://olinda.bcb.gov.br/olinda/servico/CCR/versao/v1/odata/InstituicoesFinanceirasAutorizadas?$format=json';
    constructor(private http: HttpClient) { }


    getElements(): Observable<BankElement[]> {
        return this.http.get<BankElement[]>(this.elementApiUrl);
    }


    createElements(element: BankElement): Observable<BankElement> {
        return this.http.post<BankElement>(this.elementApiUrl, element);
    }

    editElement(element: BankElement): Observable<BankElement> {
        return this.http.put<BankElement>(this.elementApiUrl, element);
    }

    deleteElement(CodigoSicap: number): Observable<any> {
        return this.http.delete<any>(`${this.elementApiUrl}?id=${CodigoSicap}`);
    }
}