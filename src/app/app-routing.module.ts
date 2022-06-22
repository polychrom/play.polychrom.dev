import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioDetailPageComponent } from './portfolio-detail-page/portfolio-detail-page.component';

const routes: Routes = [
  { path: 'header-component', component: HeaderComponent },
  { path: '', component: GalleryComponent },
  { path: 'info', component: InfoComponent },
  { path: 'project/:id', component: PortfolioDetailPageComponent }, // :id for project

  /* 404 wildcard, last entry */
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
