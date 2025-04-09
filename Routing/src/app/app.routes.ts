import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { EletroniccardComponent } from './eletroniccard/eletroniccard.component';
import { LoginComponent } from './login/login.component';
import { LatestComponent } from './latest/latest.component';
import { loginguardGuard } from './loginguard.guard';
import { EditpriceComponent } from './editprice/editprice.component';
import { changesGuard } from './changes.guard';


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
