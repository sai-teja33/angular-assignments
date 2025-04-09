import { Routes } from '@angular/router';
import { ApicallsComponent } from './apicalls/apicalls.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ParentComponent } from './parent/parent.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { EditpriceComponent } from './routing/editprice/editprice.component';
import { changesGuard } from './changes.guard';
import { loginguardGuard } from './loginguard.guard';
import { LatestComponent } from './routing/latest/latest.component';
import { LoginComponent } from './routing/login/login.component';
import { EletroniccardComponent } from './routing/eletroniccard/eletroniccard.component';
import { ElectronicsComponent } from './routing/electronics/electronics.component';
import { HomeComponent } from './routing/home/home.component';

export const routes: Routes = [
    {
        path:"apis",
        component:ApicallsComponent
    },{
        path:"userprofile",
        component:UserProfileComponent
    },{
        path:"parent",
        component:ParentComponent
    }, {
        path:"template",
        component:TemplateformsComponent
    },
    {
        path:"reactive",
        component:ReactiveformsComponent
    },
    {
        path:"formarray",
        component:ReactiveComponent
    }, 
    
    // 
    
    {
        path:'routing',
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
