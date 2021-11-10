import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationbidComponent } from './registrationbid/registrationbid.component';
import { HomeComponent } from './home/home.component';
import { FarmwelcComponent } from './farmwelc/farmwelc.component';
import { ClaimComponent } from './claim/claim.component';
import { ApplInsuranceComponent } from './appl-insurance/appl-insurance.component';
import { PlacesellComponent } from './placesell/placesell.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ViewhistoryComponent } from './viewhistory/viewhistory.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderwelcome.component';
import { InsurancepageComponent } from './insurancepage/insurancepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';



const routes: Routes = [
  
    {path:'login', component : LoginComponent },
    {path:'about', component : AboutComponent },
    {path:'contact', component : ContactComponent },
    {path:'registration', component : RegistrationComponent },
    {path:'registrationbid', component :RegistrationbidComponent },
    {path:'home', component :HomeComponent },
    {path:'claim', component :ClaimComponent },
    {path:'login/farmwelc', component : FarmwelcComponent },
    {path:'applyinsu', component : ApplInsuranceComponent },
    { path:'placesell', component : PlacesellComponent },
    {path:'forget', component : ForgetpassComponent },
    {path:'viewhistory', component : ViewhistoryComponent },
    {path:'marketplace', component : MarketplaceComponent },
    {path:'bidderwelc',component :BidderwelcomeComponent},
    {path:'insupage',component :InsurancepageComponent},
    {path:'adminpage',component :AdminpageComponent}

    

   
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
