import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './mock-data/user.mock';

@Component(
{
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]    
})

export class LoginComponent
{
    user:User;

    constructor(private router:Router)
    {
        this.user = new User();

        this.user.name = '';
        this.user.password = '';
    }

    onSubmit()
    {
        if (this.user.name === 'admin' && this.user.password === 'admin')
        {
            let link = ['/home'];
            this.router.navigate(link);            
        }
    }
}