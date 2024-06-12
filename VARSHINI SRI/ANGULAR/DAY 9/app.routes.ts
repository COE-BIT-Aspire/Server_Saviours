import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { AccountComponent } from './account/account.component';
import { ProductdetComponent } from './productdet/productdet.component';

export const routes: Routes = [
    {
        path: "shop",
        component: ShopComponent
    },
    {
        path: "product",
        component: ProductComponent
    },
    {
        path: "student",
        component: StudentComponent
    },
    {
        path: "account",
        component: AccountComponent
    },
    {
        path: "productdet",
        component: ProductdetComponent
    },
    {
        path: "**",
        component: ShopComponent
    }
];
