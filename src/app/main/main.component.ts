import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TradeEntry } from '../trade-entry';
import { TradeEntryService } from '../trade-entry.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title:string;
  trades:any;
  tradeEntries: TradeEntry[];
  closeResult:string='';
  whatIsStatus:boolean=true;
  validatingForm: FormGroup;
  formData:FormGroup;
  constructor(private modalService: NgbModal,private tradeEntryService:TradeEntryService,private router:Router) { }

  ngOnInit(): void {
    this.title = "Trade Manager";
    this.getTradeItems();
    this.formData = new FormGroup({
      id: new FormControl(""),
      fname: new FormControl(""),
      dob: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl(""),
      password: new FormControl("")
   });
  }

  getTradeItems(){
   this.tradeEntryService.getTradeEntries().subscribe(
      (response)=>{
        this.trades=response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  getTradeEntry(id:string){
      this.tradeEntryService.setValue(id);
      this.router.navigate(["/view"]);
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

  statusChange(data,id){
    this.tradeEntryService.changeStatus(data,id).subscribe(
      (response)=>{
        this.trades=response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  open(content) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
