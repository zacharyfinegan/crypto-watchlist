import { Component, OnInit } from '@angular/core';
//import { CoininfoService } from '../coininfo.service';
import { RestApiService } from '../shared/rest-api.service';
import { Top25Component } from '../top25/top25.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Home";

  private coinData: any;


  //constructor(public restApi: CoininfoService) { }
  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    //THROWS AN ERROR ON LOAD
    //this.loadCoins();
  }


  Coin: any = [];

  // loadCoins() {
  //   return this.restApi.getCoins().subscribe((data: {}) => {
  //     this.Coin = data;
  //   })
  // }

  //TEST
  // loadCoins() {
  //   this.restApi.getCoins().subscribe(data => {
  //     this.coinData = data;
  //     this.Coin = data;
  //     console.log(this.coinData);
  //   })
  // }

}
