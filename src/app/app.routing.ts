import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AuthGuard} from './helpers';
import {BoardComponent} from '@app/board/board.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'board/:nombre', component: BoardComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
