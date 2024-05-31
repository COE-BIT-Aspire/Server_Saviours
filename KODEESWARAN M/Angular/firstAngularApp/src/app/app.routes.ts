import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { BankComponent } from './bank/bank.component';
import { HomeComponent } from './home/home.component';
import { ProductdetComponent } from './productdet/productdet.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"shop",
        component:ShopComponent
    },
    {
        path:"student",
        component:StudentComponent
    },
    {
        path:"product",
        component:ProductComponent
    },
    {
        path:"productdet",
        component:ProductdetComponent
    },
    {
        path:"bank",
        component:BankComponent
    },
    {
        path:"bank",children:[
            {
                path:"home",component:HomeComponent,canActivate:[()=>{return false}]
            }
        ]
    },
    {
        path:"**", //Wild Card Routing
        component:HomeComponent
    }
];
