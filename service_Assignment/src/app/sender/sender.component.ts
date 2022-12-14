import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  SenderData:any='';
  constructor(private datasubject:DataSharingService) {
    
   }

  ngOnInit(): void {
  }
  onSubmit(data) {  
    this.datasubject.SharingData.next(data.value);  
    this.datasubject.SharingData.subscribe(s=>this.SenderData =   s )
  } 
}
