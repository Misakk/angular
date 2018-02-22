import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/router.module';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContainerComponent} from './container/container.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { HomeVtwoComponent } from './home-vtwo/home-vtwo.component';
import { PostvComponent } from './postv/postv.component';
import { AboutvComponent } from './aboutv/aboutv.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NewsService } from './news.service';
import {ArticleService} from './article.service';



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
    FooterComponent
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
