import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DownloadsComponent } from './downloads/downloads.component';
import { FriendComponent } from './friends-module/friends/friend/friend.component';
import { FriendsComponent } from './friends-module/friends/friends.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'downloads',component:DownloadsComponent},
//   {path:'friends',canActivate:[AuthGuard]
//   ,children:[
//     {path:'',component:FriendsComponent},
//     {path:'friend/:name',component:FriendComponent}
//   ]
// },
  { path: 'frds', loadChildren: () => import('./friends-module/friends-module.module').then(m => m.FriendsModuleModule) },
  // { path: 'friends', loadChildren: () => import('./friends-module/friends-module.module').then(m => m.FriendsModuleModule) }
];
///friends/friend/friend.component

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
