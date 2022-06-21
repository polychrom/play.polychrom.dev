import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioDetailPageComponent } from './portfolio-detail-page/portfolio-detail-page.component';

const routes: Routes = [
  { path: 'header-component', component: HeaderComponent },
  /* { path: '**', component: PageNotFoundComponent },*/ // Wildcard route for a 404 page
  { path: 'projecta', component: PortfolioDetailPageComponent }, // :id for project
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
