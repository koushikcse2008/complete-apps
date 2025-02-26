import { Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { LoginComponent } from './features/login/login.component';
//import { CategoryComponent } from './features/category/category.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { AboutComponent } from './features/about/about.component';
import { BrandComponent } from './features/brand/brand.component';
import { ContactComponent } from './features/contact/contact.component';
import { FaqComponent } from './features/faq/faq.component';
import { OrderComponent } from './features/order/order.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ProductComponent } from './features/product/product.component';
import { ProductEnquiryComponent } from './features/product-enquiry/product-enquiry.component';
import { ServiceComponent } from './features/service/service.component';
import { UserComponent } from './features/user/user.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ListCategoryComponent } from './features/category/list-category/list-category.component';
import { CreateCategoryComponent } from './features/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './features/category/update-category/update-category.component';

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
                { path: 'dashboard', component: DashboardComponent },
                { path: 'about', component: AboutComponent },
                { path: 'brand', component: BrandComponent },
                { path: 'category/list', component: ListCategoryComponent },
                { path: 'category/create', component: CreateCategoryComponent },
                { path: 'category/update/:id', component: UpdateCategoryComponent },
                { path: 'contact', component: ContactComponent },
                { path: 'faq', component: FaqComponent },
                { path: 'order', component: OrderComponent },
                { path: 'portfolio', component: PortfolioComponent },
                { path: 'product', component: ProductComponent },
                { path: 'product-enquiry', component: ProductEnquiryComponent },
                { path: 'service', component: ServiceComponent },
                { path: 'user', component: UserComponent },
            ]
    },
    { path: '**', redirectTo: 'not-found' }  
];
