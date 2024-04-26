import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
