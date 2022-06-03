import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  title = "Profile";
  watchlist = [];

  constructor(
    public restApi: RestApiService, 
    public router: Router, 
    private http: HttpClient
    ) { }

    ngOnInit(): void {
    }

//TABLE CREATION
//--------------------------
//ADD COMMAS
  convertMC(str: string): string {
    return Math.round(parseFloat(str) * 100 / 100).toLocaleString();
  }
  convertPrice(str: string): number {
    let num = (parseInt(str));
    num.toFixed(3);
    console.log(typeof num);
    return num;
  }
//--------------------------


//USER INPUT
//--------------------------
//PROCESSES USER INPUT
    chosenCoin: string = '';
    possibleCoinURL: string = '';
    onSubmit(f: NgForm) {
      this.chosenCoin = f.value.coin;
      this.possibleCoinURL = this.restApi.receiveAndTestCoinName(this.chosenCoin)
      this.testJSON(this.possibleCoinURL);
      //this.addToWatchlist(this.possibleCoinURL);
    }
//TESTS URL FOR LEGITIMACY AND ADDS TO WATCHLIST
    testJSON(url: string) {
      this.http.get(url).toPromise().then(data => {
        for (let key in data) {
          if (data.hasOwnProperty("data")) 
            this.watchlist.push(data[key as never]);
        }
          //this.testPersistence();
          this.printWatchlist();
      });
    }    
//PRINTS COIN NAME TO PAGE
    watchlistText = '';
    printWatchlist() {
      for (let i = 0; i < this.watchlist.length-1; i++) {
        this.watchlistText = this.watchlist[i]["rank"] + " " + this.watchlist[i]["name"];
      }
    }

//ATTEMPT AT A TEST FOR LOCAL PERSISTENCE
    // testPersistence() {
    //   let value = (localStorage.getItem("key"));
    //   console.log(value);
    //   if (value == null) {
    //     localStorage.setItem("rank", this.watchlistText);
    //     alert("Hellow");
    //   } else {
    //     let value = localStorage.getItem("rank");
    //     alert(value);
    //   }
    // }    
//--------------------------
}