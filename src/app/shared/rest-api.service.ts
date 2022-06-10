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

  constructor(
    private http: HttpClient,
    ) { }

    public apiURL = 'https://api.coincap.io/v2/assets/';


    receiveAndTestCoinName(tryCoin: string): any {
 

        let tryCoinURL = 'https://api.coincap.io/v2/assets/' + tryCoin
//VERY OLD
        this.http.get(tryCoinURL).toPromise().then(data => {
            //let i = 0; //PREVENTS DUPLICATES
            for (let key in data) {
                if (data.hasOwnProperty("data")) {
                    //console.log("congrats")
                } else console.log("oops poops")
            }
        });
        return tryCoinURL;
    }
}






// export class RestApiService {

//     constructor(
//       private http: HttpClient,
//       ) { }
  
//       apiURL = 'https://api.coincap.io/v2/assets/';
//       tryLowerCaseCoin = '';
//       coinNameArray : string [] = [];
//       totalNameArray : string [] = [];
//       tryCoinURL = 'https://api.coincap.io/v2/assets/' + this.tryLowerCaseCoin;
//       tryCoin = '';
  
  
  
//       receiveAndTestCoinName(tryCoin: string): any {
  
//           // this.http.get(this.apiURL).toPromise().then(data => {
  
  
//           //     let i = 0; //PREVENTS DUPLICATES
//           //     for (let key in data) { 
//           //         if (data.hasOwnProperty("data")) {
//           //             if (i === 0){ 
//           //                 let coinArray = Object.values(data)[0];
//           //                 for (let coin in Object.values(coinArray)) {
//           //                     let coinName = (coinArray[coin]["id"])
//           //                     this.totalNameArray.push(coinName);
//           //                 } 
//           //                 i++;
//           //             }
//           //         }
//           //     }
  
//           //     if (this.totalNameArray.includes(this.tryLowerCaseCoin)) {
//           //         console.log(this.totalNameArray.includes(this.tryLowerCaseCoin))
//           //         return this.tryCoinURL;
//           //     } else {
//           //         console.log(this.totalNameArray.includes(this.tryLowerCaseCoin))
//           //         alert ("Input a valid cryptocurrency")
//           //         return;
//           //     }
//           //     //console.log(totalNameArray)
//           // });
  
//           // this.http.get(tryCoinURL).toPromise().then(data => {
          
//           //     console.log(totalNameArray);
//           //     console.log(totalNameArray.length)
//           //     if (totalNameArray.includes(tryLowerCaseCoin)) {
//           //         console.log(totalNameArray.includes(tryLowerCaseCoin))
//           //         return tryCoinURL;
//           //     } else {
//           //         alert ("Input a valid cryptocurrency")
//           //         return;
//           //     }
//           // });
  
  
//   //OLD
//           this.http.get(this.tryCoinURL).toPromise().then(data => {
//               let i = 0; //PREVENTS DUPLICATES
//               for (let key in data) { 
//                   if (data.hasOwnProperty("data")) {
//                       if (i === 0){ 
//                           let coinArray = Object.values(data)[0];
//                           for (let coin in Object.values(coinArray)) {
//                               let coinName = (coinArray[coin]["id"])
//                               this.coinNameArray.push(coinName);
//                           }
//                           if (this.coinNameArray.includes(this.tryLowerCaseCoin)) {
//                               //console.log(coinNameArray)
//                               return this.tryCoinURL;
//                           } else {
//                               alert ("Input a valid cryptocurrency")
//                               return;
//                           }
//                           i++;
//                       }
//                   }   
//               }
//               return;
//           });
  
  
//   //VERY OLD
//       //     this.http.get(tryCoinURL).toPromise().then(data => {
//       //         //let i = 0; //PREVENTS DUPLICATES
//       //         for (let key in data) {
//       //             if (data.hasOwnProperty("data")) {
//       //                 //console.log("congrats")
//       //             } else console.log("oops poops")
//       //         }
//       //     });
//       //     return tryCoinURL;
  
  
//        }
//   }
