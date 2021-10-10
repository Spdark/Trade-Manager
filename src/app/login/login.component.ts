import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TradeEntryService } from '../trade-entry.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  formData: FormGroup;

  constructor(private tradeEntriesService:TradeEntryService  ,private router : Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),
   });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    this.tradeEntriesService.getTradeEntry(this.userName).subscribe(
      (response)=>{
        if(response.id == this.userName && response.password == this.password){
          this.router.navigate(['/trades']);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
 }

}
