import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsModuleRoutingModule } from './friends-module-routing.module';
import { FriendComponent } from './friends/friend/friend.component';
import { FriendsComponent } from './friends/friends.component';



@NgModule({
  declarations: [
    FriendComponent,
    FriendsComponent
  ],
  imports: [
    CommonModule,
    FriendsModuleRoutingModule
  ]
})
export class FriendsModuleModule { }
