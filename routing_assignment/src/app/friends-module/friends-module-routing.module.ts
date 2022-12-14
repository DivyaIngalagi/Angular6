import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { FriendComponent } from './friends/friend/friend.component';
import { FriendsComponent } from './friends/friends.component';
//,canActivate:[AuthGuard]
const routes: Routes = [{path:''
  ,children:[
    {path:'',component:FriendsComponent},
    {path:'friend/:name',component:FriendComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsModuleRoutingModule { }
