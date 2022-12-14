import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  ReceiverData: any = '';  
  constructor(private datasubject:DataSharingService) { 
    this.datasubject.SharingData.subscribe(r=>this.ReceiverData =   r )
  }

  ngOnInit(): void {
  }
  onSubmit(data) {  
    this.datasubject.SharingData.next(data.value);  
  } 
}
