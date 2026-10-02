import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth-service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService, private router:Router){}

    canActivate():any {
        // se il login è corretto accedi
        const isAuth = this.authService.isLogged()
        if(!isAuth){
            //se non siamo loggati reindirizzo al login
            this.router.navigateByUrl('login')
        }
        return isAuth
    }
}