import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TradeEntry } from './trade-entry';

@Injectable({
  providedIn: 'root'
})
export class TradeEntryService {

  private tradeRestUrl:string = "http://localhost:3000/";
  value:string;
  checkStatus:boolean;

  constructor(private http:HttpClient) { }

  getTradeEntry(id:string){
    const URL=this.tradeRestUrl+"trades/"+id;
    return this.http.get<TradeEntry>(URL);
  }
  getTradeEntries(){
    const URL=this.tradeRestUrl+"trades";
    return this.http.get(URL);
  }
  saveTrade(UserPayLoad){
    const URL=this.tradeRestUrl+"trades";
    return this.http.post<TradeEntry>(URL,UserPayLoad);
  }
  changeStatus(data,id:string){
    const URL=this.tradeRestUrl+"trades/"+id;
    return this.http.put<TradeEntry>(URL,data);
  }
  setStatus(data){
    this.checkStatus=data;
  }
  getStatus(){
    return this.checkStatus;
  }
  setValue(data){
    this.value=data;
  }
  getvalue(){
    return this.value;
  }
}
