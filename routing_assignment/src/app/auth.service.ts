import { Injectable } from '@angular/core';
import { FriendsComponent } from './friends-module/friends/friends.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private friend:FriendsComponent) { }
  isLengthTen(){
    if(this.friend.names.length>=10){
    return true;
    }else{
      return false;
    }
  }
}
