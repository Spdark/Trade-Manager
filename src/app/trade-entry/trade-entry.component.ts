import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeEntry } from '../trade-entry';
import { TradeEntryService } from '../trade-entry.service';

@Component({
  selector: 'app-trade-entry',
  templateUrl: './trade-entry.component.html',
  styleUrls: ['./trade-entry.component.css']
})
export class TradeEntryComponent implements OnInit {
  title:string;
  tradeEntry:TradeEntry;
  selectedID;
  name:string;
  dob:string;
  email:string;
  address:string;
  city:string;
  state:string;
  country:string;
  id:string;
  constructor(private tradeEntriesService:TradeEntryService ,private router : Router) { 
    this.LoadUserByID();
  }

  ngOnInit(): void {
    this.title = "Trade Manager";
  }


  LoadUserByID(){
    this.selectedID=this.tradeEntriesService.getvalue();
    this.tradeEntriesService.getTradeEntry(this.selectedID).subscribe(
      (response)=>{
        this.id=response.id;
        this.name=response.fname;
        this.dob=response.dob;
        this.email=response.email;
        this.address=response.address;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  goToList() { 
    this.router.navigate(['/trades']); 
 }

}
