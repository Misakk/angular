import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from '../main/main.component';
import { ContainerComponent } from '../container/container.component';
import { NewsComponent } from '../news/news.component';
import { ArticleContainerComponent } from '../article-container/article-container.component';
import { HomeVtwoComponent } from '../home-vtwo/home-vtwo.component';
import { PostvComponent } from '../postv/postv.component';
import { AboutvComponent } from '../aboutv/aboutv.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',  component: MainComponent },
  { path: 'container',  component: ContainerComponent },
  { path: 'news',  component: NewsComponent },
  { path: 'article-container',  component: ArticleContainerComponent },
  { path: 'home-vtwo',  component: HomeVtwoComponent },
  { path: 'aboutv',  component: AboutvComponent },
  { path: 'postv',  component: PostvComponent },
  { path: 'contact',  component: ContactComponent }




];

@NgModule({
  imports: [ RouterModule.forRoot(routes , { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


