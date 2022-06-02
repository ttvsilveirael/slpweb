import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class Guard implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        if (this.auth.isAuthenticated()) {
            return true;
        } else {

            this.router.navigate(['']);
            return false;
        }

    }
}