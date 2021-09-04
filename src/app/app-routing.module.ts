import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NoAuthGuard } from '@core/guard/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path:'',
        loadChildren:() => import('@modules/main/main.module').then(m=>m.MainModule)
      },
      {
        path:'destinations',
        loadChildren:() => import('@modules/destinations/destinations.module').then(m=>m.DestinationsModule)
      },
      {
        path:'offers',
        loadChildren:() => import('@modules/offers/offers.module').then(m=>m.OffersModule)
      },
      {
        path:'weddings',
        loadChildren:() => import('@modules/weddings/weddings.module').then(m=>m.WeddingsModule)
      },
      {
        path:'blogs',
        loadChildren:() => import('@modules/blogs/blogs.module').then(m=>m.BlogsModule)
      },
      {
        path:'tours',
        loadChildren:() => import('@modules/tours/tours.module').then(m=>m.ToursModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('@modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('@modules/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
