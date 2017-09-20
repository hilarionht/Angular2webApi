import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [],
    moduleId: module.id
})
export class NavbarComponent implements OnInit {

    constructor() {
       // auth.handleAuthentication();private auth: AuthService
    }

    ngOnInit() {
    }

    login() {
       // this.auth.login();
    }
    salir() {
        //this.auth.logout();
    }
}
