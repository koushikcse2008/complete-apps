import { Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
//import { AboutComponent } from './pages/about/about.component';
import { OrderComponent } from './pages/order/order.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProductEnquiryComponent } from './pages/product-enquiry/product-enquiry.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ListCategoryComponent } from './pages/category/list-category/list-category.component';
import { CreateCategoryComponent } from './pages/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './pages/category/update-category/update-category.component';

import { ListBrandComponent } from './pages/brand/list-brand/list-brand.component';
import { CreateBrandComponent } from './pages/brand/create-brand/create-brand.component';
import { UpdateBrandComponent } from './pages/brand/update-brand/update-brand.component';

import { ListFaqComponent } from './pages/faq/list-faq/list-faq.component';
import { CreateFaqComponent } from './pages/faq/create-faq/create-faq.component';
import { UpdateFaqComponent } from './pages/faq/update-faq/update-faq.component';

import { ListContactComponent } from './pages/contact/list-contact/list-contact.component';
import { CreateContactComponent } from './pages/contact/create-contact/create-contact.component';
import { UpdateContactComponent } from './pages/contact/update-contact/update-contact.component';

import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';

import { ListServiceComponent } from './pages/service/list-service/list-service.component';
import { CreateServiceComponent } from './pages/service/create-service/create-service.component';
import { UpdateServiceComponent } from './pages/service/update-service/update-service.component';

import { ListAboutComponent } from './pages/about/list-about/list-about.component';
import { CreateAboutComponent } from './pages/about/create-about/create-about.component';
import { UpdateAboutComponent } from './pages/about/update-about/update-about.component';

import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { UpdateProductComponent } from './pages/product/update-product/update-product.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'admin',
        component: CommonLayoutComponent,
            children: [
                { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
                //{ path: 'about', component: AboutComponent },

                { path: 'about/list', component: ListAboutComponent, canActivate: [AuthGuard] },
                { path: 'about/create', component: CreateAboutComponent, canActivate: [AuthGuard] },
                { path: 'about/update/:id', component: UpdateAboutComponent, canActivate: [AuthGuard] },

                { path: 'category/list', component: ListCategoryComponent, canActivate: [AuthGuard] },
                { path: 'category/create', component: CreateCategoryComponent, canActivate: [AuthGuard] },
                { path: 'category/update/:id', component: UpdateCategoryComponent, canActivate: [AuthGuard] },

                { path: 'brand/list', component: ListBrandComponent, canActivate: [AuthGuard] },
                { path: 'brand/create', component: CreateBrandComponent, canActivate: [AuthGuard] },
                { path: 'brand/update/:id', component: UpdateBrandComponent, canActivate: [AuthGuard] },

                { path: 'faq/list', component: ListFaqComponent, canActivate: [AuthGuard] },
                { path: 'faq/create', component: CreateFaqComponent, canActivate: [AuthGuard] },
                { path: 'faq/update/:id', component: UpdateFaqComponent, canActivate: [AuthGuard] },

                { path: 'contact/list', component: ListContactComponent, canActivate: [AuthGuard] },
                { path: 'contact/create', component: CreateContactComponent, canActivate: [AuthGuard] },
                { path: 'contact/update/:id', component: UpdateContactComponent, canActivate: [AuthGuard] },

                { path: 'user/list', component: ListUserComponent, canActivate: [AuthGuard] },
                { path: 'user/create', component: CreateUserComponent, canActivate: [AuthGuard] },
                { path: 'user/update/:id', component: UpdateUserComponent, canActivate: [AuthGuard] },

                { path: 'service/list', component: ListServiceComponent },
                { path: 'service/create', component: CreateServiceComponent },
                { path: 'service/update/:id', component: UpdateServiceComponent },

                { path: 'order', component: OrderComponent },
                { path: 'portfolio', component: PortfolioComponent },
                { path: 'product-enquiry', component: ProductEnquiryComponent },

                { path: 'product/list', component: ListProductComponent, canActivate: [AuthGuard] },
                { path: 'product/create', component: CreateProductComponent, canActivate: [AuthGuard] },
                { path: 'product/update/:id', component: UpdateProductComponent, canActivate: [AuthGuard] },

                { path: 'not-found', component: NotFoundComponent },
            ]
    },
    { path: '**', redirectTo: 'not-found' }  
];
