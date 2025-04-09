import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../Angular-App/src/app/routing/home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { EletroniccardComponent } from './eletroniccard/eletroniccard.component';
import { LoginComponent } from '../../../Angular-App/src/app/routing/login/login.component';
import { LatestComponent } from '../../../Angular-App/src/app/routing/latest/latest.component';
import { loginguardGuard } from '../../../Angular-App/src/app/loginguard.guard';
import { EditpriceComponent } from '../../../Angular-App/src/app/routing/editprice/editprice.component';
import { changesGuard } from '../../../Angular-App/src/app/changes.guard';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'electronics',
        component:ElectronicsComponent,
    },  
        
    {
        path:'electroniccard/:id',
        component:EletroniccardComponent,
    },
    {
        path:'login',
        component:LoginComponent
    },
   
    {
        path:'latest',
        component:LatestComponent,
        canActivate:[loginguardGuard],
    },
    {
        path:'editprice',
        component:EditpriceComponent,
        canDeactivate:[changesGuard]
    }
];
