import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule(
{
    imports: [
                SharedModule, 
                MaterialModule.forRoot()  
             ],
    declarations: [ HomeComponent ],
    providers: []
})

export class HomeModule {}