import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    open: Boolean = false;
    user: any = {};
    errors = false;
    constructor(private http: HttpClient) {
    }

    signUp = () => {
        if (this.user.name.length < 4 ||
                this.user.password < 8 ||
                this.user.password !== this.user.password_confirm) {
            this.errors = true;
        } else {
            this.errors = false;
        }
        console.log(this.user);
        debugger;
        this.http.get('/api/v1/register/', <any>{username: this.user.name, password: this.user.password} ).subscribe((resp) =>{
            console.log(resp)
        })
    }
}
