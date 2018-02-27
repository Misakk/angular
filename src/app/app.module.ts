import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/router.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { HomeVtwoComponent } from './components/home-vtwo/home-vtwo.component';
import { PostvComponent } from './components/postv/postv.component';
import { AboutvComponent } from './components/aboutv/aboutv.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsService } from './services/news.service';
import { ArticleService } from './services/article.service';
import { DisplayDirective } from './display.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    MainComponent,
    NewsComponent,
    ArticleContainerComponent,
    HomeVtwoComponent,
    PostvComponent,
    AboutvComponent,
    ContactComponent,
    FooterComponent,
    DisplayDirective
  ],
  exports:[
    DisplayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewsService,
              ArticleService],

  bootstrap: [AppComponent]
})
export class AppModule { }
