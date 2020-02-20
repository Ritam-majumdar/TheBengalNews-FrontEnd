import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminCreateArticleComponent } from './admin-create-article/admin-create-article.component';
import { AdminEditArticleComponent } from './admin-edit-article/admin-edit-article.component';
import { AdminMenusComponent } from './admin-menus/admin-menus.component';
import { AdminEditMenusComponent } from './admin-edit-menus/admin-edit-menus.component';
import { AdminKeywordComponent } from './admin-keyword/admin-keyword.component';
import { TheBengalNewsHomeComponent} from './the-bengal-news-home/the-bengal-news-home.component';
import { TheBengalNewsArticlesByMenuComponent } from './the-bengal-news-articles-by-menu/the-bengal-news-articles-by-menu.component';
import { TheBengalNewsArticleComponent} from './the-bengal-news-article/the-bengal-news-article.component'
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSocialComponent } from './admin-social/admin-social.component';
import { from } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: TheBengalNewsHomeComponent },
  { path: 'home', component: TheBengalNewsHomeComponent },
  { path: 'home/:mMenu/:ddMenu', component: TheBengalNewsArticlesByMenuComponent },
  { path: 'home/:articletitle', component: TheBengalNewsArticleComponent },
  { path: 'tbnadminsignup', component: AdminSignupComponent },
  { path: 'tbnadminlogin', component: AdminLoginComponent },
  { path: 'tbn-admin-dashboard', component: AdminDashboardComponent},
  { path: 'articles', component: AdminArticlesComponent },
  { path: 'create-article', component: AdminCreateArticleComponent},
  { path: 'edit-article/:articleId', component: AdminEditArticleComponent },
  { path: 'manage-menus', component: AdminMenusComponent },
  { path: 'edit-menus/:mainMenuId', component: AdminEditMenusComponent },
  { path: 'keywords', component: AdminKeywordComponent },
  { path: 'social', component: AdminSocialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }