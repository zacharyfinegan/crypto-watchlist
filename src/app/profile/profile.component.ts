import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { compileDeclareClassMetadata } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  chosenCoin: string = '';
  possibleCoinURL: string = '';
  title = "Profile";
  stringified = '';
  localStorageLength = 0;
  localStorageArray = [];
  finalArray : any [] = [];

  constructor(
    public restApi: RestApiService, 
    public router: Router, 
    private http: HttpClient
    ) { }

    ngOnInit(): void {
      this.returnLocalStorage();
    }

//--------------------------
  convertMC(str: string): string {
    return Math.round(parseFloat(str) * 100 / 100).toLocaleString();
  }
  convertPrice(str: string): number {
    let num = (parseInt(str));
    num.toFixed(3);
    return num;
  }
//--------------------------


//USER INPUT
    onSubmit(f: NgForm) {
      this.chosenCoin = f.value.coin;
      this.possibleCoinURL = this.restApi.receiveAndTestCoinName(this.chosenCoin)
      this.testJSON(this.possibleCoinURL);
    }

    testJSON(url: string) {
        this.http.get(url).toPromise().then(data => {
            let i = 0; //PREVENTS DUPLICATES
            for (let key in data) {
                if (data.hasOwnProperty("data") && i === 0) {
                    this.stringifyThis(data[key as never]);
                    this.createLocalWatchlist(this.stringified);   
                    this.returnLocalStorage();
                    //this.sortLocalWatchlistByRank(this.finalArray);
                }  
                i++;
            }
        });
    }    
    
//RETURNS STRINGIFIED JSON EXCLUDING TIMESTAMP
//TIMESTAMP NEEDS TO BE EXCLUDED BC IT OVERLAPS ACTUAL DATA DURING STRINGIFY 2ND ITERATION.
    stringifyThis(data: any) : any {
        if (typeof data !== "number") {
            this.stringified = JSON.stringify(data);
            return this.stringified;
        }
    }

//--------------------------
    createLocalWatchlist(stringified: string) {
        if (localStorage.getItem(this.chosenCoin) === null) { 
            localStorage.setItem(this.chosenCoin, stringified)
        }
    }

    returnLocalStorage() : any{
        for (let [key, value] of Object.entries(localStorage)) {
            let coin = JSON.parse(localStorage.getItem(key) || '{}');
            //console.log(coin)
            this.localStorageLength = Object.entries(localStorage).length; //PREVENTS DUPLICATES
            if (this.finalArray.includes(coin) === false) this.finalArray.push(coin);
        }
        return this.finalArray;
    }

    // sortLocalWatchlistByRank(objs: object) {
    //     let sortedByRank
    //     let values = Object.values(objs);
    //     // function compare(a, b) {
    //     //     if (a.rank < b.rank) {
    //     //         return -1;
    //     //     } 
    //     //     else if (a.rank > b.rank) {
    //     //       return 1;
    //     //     }
    //     //     return 0;
    //     // }
    //     //objs.sort(compare);
    // }

    // sortLocalWatchlistByName(objs: object) {
    //     let sortedByName;
    //     let values = Object.values(objs);
    //     //sortedByName = objs.sort(())
    // }
//-------------------------- 
}