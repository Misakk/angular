import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { V2containerComponent } from './components/home-vtwo/v2container/v2container.component';
import { V2articleComponent } from './components/home-vtwo/v2article/v2article.component';
import { PostvHeaderBottomComponent } from './components/postv/postv-header-bottom/postv-header-bottom.component';
import { PostvArticleComponent } from './components/postv/postv-article/postv-article.component';
import { PostvContainerComponent } from './components/postv/postv-container/postv-container.component';
import { PostvBottomContainerComponent } from './components/postv/postv-bottom-container/postv-bottom-container.component';
import { AboutvBottomHeaderComponent } from './components/aboutv/aboutv-bottom-header/aboutv-bottom-header.component';
import { AboutvContainerComponent } from './components/aboutv/aboutv-container/aboutv-container.component';


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
    DisplayDirective,
    V2containerComponent,
    V2articleComponent,
    PostvHeaderBottomComponent,
    PostvArticleComponent,
    PostvContainerComponent,
    PostvBottomContainerComponent,
    AboutvBottomHeaderComponent,
    AboutvContainerComponent
  ],
  exports:[
    DisplayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [NewsService,
              ArticleService],

  bootstrap: [AppComponent]
})
export class AppModule { }
