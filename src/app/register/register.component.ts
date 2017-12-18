import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
})
export class RegisterComponent {
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
        console.log(this.user)
        // this.http.post('/api/v1/user', )
    }
}
