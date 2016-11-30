import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from '../shared/module-import-guard';

import * as rxjsExtensions from './rxjs-extensions';

@NgModule(
{
    imports: [ 
                CommonModule,
             ],
    exports: [],
    declarations: [],
    providers: []
})

export class UtilsModule
{
    constructor( @Optional() @SkipSelf() parentModule: UtilsModule) 
    {
        throwIfAlreadyLoaded(parentModule, 'UtilsModule');
    }    
}