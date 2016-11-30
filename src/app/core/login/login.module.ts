import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule(
{
    imports: [ 
                SharedModule,     
                MaterialModule.forRoot() 
             ],
    declarations: [ LoginComponent ],
    providers: []
})

export class LoginModule {}