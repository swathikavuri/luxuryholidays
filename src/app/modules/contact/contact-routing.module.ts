import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { PartnerairlinesComponent } from './partnerairlines/partnerairlines.component';
import { RequestquoteComponent } from "./requestquote/requestquote.component";
import { OnlinebrochureComponent } from "./onlinebrochure/onlinebrochure.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { BookingconditionsComponent } from "./bookingconditions/bookingconditions.component";
import { Covid19Component } from "./covid19/covid19.component";
import { PrivacypolicyComponent } from "./privacypolicy/privacypolicy.component";
import { TravelwiseComponent } from "./travelwise/travelwise.component";


const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
  {
    path: 'partnerairlines',
    component: PartnerairlinesComponent
  },
  {
    path: 'requestquote',
    component: RequestquoteComponent
  },
  {
    path: 'onlinebrochure',
    component: OnlinebrochureComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'bookingconditions',
    component: BookingconditionsComponent
  },
  {
    path: 'covid19',
    component: Covid19Component
  },
  {
    path: 'privacypolicy',
    component: PrivacypolicyComponent
  },
  {
    path: 'travelwise',
    component: TravelwiseComponent
  }
];

export const ContactRoutes = RouterModule.forChild(routes);
