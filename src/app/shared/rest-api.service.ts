import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Coin } from '../shared/coin';


//GOOD INFO ON CRUD JSON DATA / WALKTHRU
//https://www.positronx.io/angular-httpclient-http-service/


@Injectable({
  providedIn: 'root'
})


export class RestApiService {

  public apiURL = 'https://api.coincap.io/v2/assets/bitcoin';
  //public searchedURL = 'https://api.coincap.io/v2/assets/' + search;

  public tryCoinURL = '';

  receiveAndTestCoinName(tryCoin: string): string {
    let tryCoinURL = 'https://api.coincap.io/v2/assets/' + tryCoin;
    //console.log(tryCoinURL);
    return tryCoinURL;
  }
  

  constructor(
    private http: HttpClient,
    ) { }



  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };


  //   //FETCH COINS LIST...turned http into httpClient. Not sure
  // // getCoins(): Observable<Coin> {
  // //   return this.httpClient
  // //   .get<Coin>(this.apiURL + '/data')
  // //   .pipe(retry(1), catchError(this.handleError));
  // // }

  // //TEST
  // getCoins(): Observable<any> {
  //   return this.http
  //   .get<any>(this.apiURL)
  //   .pipe(retry(1), catchError(this.handleError));
  // }
  // // getCoins(): Observable<any> {
  // //   return this.http
  // //   .get<any>(this.apiURL)
  // //   .pipe(retry(1), catchError(this.handleError));
  // // }

  // //FETCH COIN...turned http into httpClient. Not sure
  // getCoin(name: any): Observable<Coin> {
  //   return this.http
  //   .get<Coin>(this.apiURL + '/data/' + name)
  //   .pipe(retry(1), catchError(this.handleError));
  // }

  // //CREATE COIN
  // pickCoin(coin: any): Observable<Coin> {
  //   return this.http
  //   .post<Coin>(
  //     this.apiURL + '/data',
  //     JSON.stringify(coin),
  //     this.httpOptions
  //   )
  //   .pipe(retry(1), catchError(this.handleError));
  // }



  // handleError(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }
}


//HOW TO RUN JSON
//https://stackoverflow.com/questions/55547572/json-server-is-not-recognized-as-an-internal-or-external-command
//npx json-server --watch db.json