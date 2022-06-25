import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioDetailPageComponent } from './portfolio-detail-page/portfolio-detail-page.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';
import { StackComponent } from './stack/stack.component';
import { HeadlineComponent } from './headline/headline.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    PortfolioDetailPageComponent,
    FooterComponent,
    GalleryComponent,
    InfoComponent,
    StackComponent,
    HeadlineComponent,
    NavigationComponent,
    MessageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
