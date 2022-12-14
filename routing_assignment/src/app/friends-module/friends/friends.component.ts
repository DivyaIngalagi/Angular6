import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor() { }
  names:string[]=["divyaqqqqqq","mike","jack","john","nanny","chan","masav"
,"boochan","amara","nicola"];
  ngOnInit(): void {
  }

}
