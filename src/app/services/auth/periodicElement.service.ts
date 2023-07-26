import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodicElement } from 'src/app/models/PeriodicElement';

@Injectable()
export class PeriodicElementService {
    elementApiUrl = 'https://olinda.bcb.gov.br/olinda/servico/CCR/versao/v1/odata/InstituicoesFinanceirasAutorizadas?$format=json';
    constructor(private http: HttpClient) { }


    getElements(): Observable<PeriodicElement[]> {
        return this.http.get<PeriodicElement[]>(this.elementApiUrl);
    }


    createElements(element: PeriodicElement): Observable<PeriodicElement> {
        return this.http.post<PeriodicElement>(this.elementApiUrl, element);
    }

    editElement(element: PeriodicElement): Observable<PeriodicElement> {
        return this.http.put<PeriodicElement>(this.elementApiUrl, element);
    }

    deleteElement(CodigoSicap: number): Observable<any> {
        return this.http.delete<any>(`${this.elementApiUrl}?id=${CodigoSicap}`);
    }
}