import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from '../components/main/main.component';
import { ContainerComponent } from '../components/container/container.component';
import { NewsComponent } from '../components/news/news.component';
import { ArticleContainerComponent } from '../components/article-container/article-container.component';
import { HomeVtwoComponent } from '../components/home-vtwo/home-vtwo.component';
import { PostvComponent } from '../components/postv/postv.component';
import { AboutvComponent } from '../components/aboutv/aboutv.component';
import { ContactComponent } from '../components/contact/contact.component';


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


