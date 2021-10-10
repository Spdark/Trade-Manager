import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TradeEntryService } from '../trade-entry.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData: FormGroup;
  trades:any;

  constructor(private tradeEntryService:TradeEntryService  ,private router : Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      id: new FormControl(""),
      fname: new FormControl(""),
      dob: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl(""),
      password: new FormControl("")
   });
  }

  onClickSubmit(data){
    this.tradeEntryService.saveTrade(data).subscribe(
      (response)=>{
        this.trades=response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
