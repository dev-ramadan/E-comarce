import { Routes } from '@angular/router';
import { HomeComponent } from '../componants/home/home.component';
import { AboutComponent } from '../componants/about/about.component';
import { ContactComponent } from '../componants/contact/contact.component';
import { LoginComponent } from '../componants/login/login.component';
import { SignupComponent } from '../componants/signup/signup.component';
import { RegisterComponent } from '../componants/register/register.component';
import { BlogComponent } from '../componants/blog/blog.component';
import { ShopComponent } from '../componants/shop/shop.component';
import { ProdcutDetilsComponent } from '../componants/prodcut-detils/prodcut-detils.component';
import { CartComponent } from '../componants/cart/cart.component';
import { ChackoutComponent } from '../componants/chackout/chackout.component';
import { SucsesseComponent } from '../componants/sucsesse/sucsesse.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'detils/:id', component: ProdcutDetilsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'chackout', component: ChackoutComponent },
  { path: 'sucsses', component: SucsesseComponent },
  // {path : '**' , component : PageNotFoundComponent}
];
