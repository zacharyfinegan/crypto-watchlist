import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-top25',
  templateUrl: './top25.component.html',
  styleUrls: ['./top25.component.css']
})

export class Top25Component implements OnInit {

  title = "Top 25";
  btcURL : string = "https://api.coincap.io/v2/assets/";
  coins100 = [];
  coins25 = [];
  presentation: any;
  nameRank25 : string [] = [];

  constructor(
    public restApi: RestApiService, 
    public router: Router, 
    private http: HttpClient
  ) { }


  ngOnInit() {

    this.http.get(this.btcURL).toPromise().then(data => {

      for (let key in data) {
        if (data.hasOwnProperty(key)) 
          this.coins100.push(data[key as never]);
      }
      
      this.coins25 = this.coins100[0];
      this.coins25 = this.coins25.splice(0,25);

      
      for (let i = 0; i < 25; i++){
        this.presentation = this.coins25[i]["rank"] + "   " + this.coins25[i]["name"];
        this.nameRank25.push(this.presentation);
      }
    });
  }
  
//ADD COMMAS
  convertMC(str: string): string {
    return Math.round(parseFloat(str) * 100 / 100).toLocaleString();
  }
  convertPrice(str: string): number {
    let num = (parseInt(str));
    num.toFixed(3);
    return num;
  }
}
