import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Cart } from './features/cart/cart';
import { Login } from './features/login/login';
import { Register } from './features/register/register';
import { AuthGuard } from './core/services/auth.guard';
import { NoResult } from './features/home/no-result/no-result';

export const routes: Routes = [
    {path:'home', loadComponent: () => import('./features/home/home').then(c => c.Home), canActivate:[AuthGuard]},
    {path:'cart', loadComponent:()=> import('./features/cart/cart').then( c=> c.Cart), canActivate:[AuthGuard]},
    {path:'login', component: Login},
    {path:'register', component: Register},
    {path:'noresult', loadComponent:()=> import('./features/home/no-result/no-result').then( c=> c.NoResult), canActivate:[AuthGuard]},
    {path:'**', component: Home}
];
