import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { throwIfAlreadyLoaded } from '../shared/module-import-guard';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

@NgModule(
{
    imports: [ 
                CommonModule,
                MaterialModule.forRoot(), 
                LoginModule,
                HomeModule
             ],
    exports: [],
    declarations: [],
    providers: []
})

export class CoreModule
{
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) 
    {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }    
}