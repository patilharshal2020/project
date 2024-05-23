import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from 'src/components/user/user-list/user-list.component';
import { UserComponent } from 'src/components/user/user.component';

const routes: Routes = [
  {path: 'Home', component: UserComponent},
  {path: 'User-list', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
