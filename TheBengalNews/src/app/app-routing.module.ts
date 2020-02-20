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
import { from } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: TheBengalNewsHomeComponent },
  { path: 'home', component: TheBengalNewsHomeComponent },
  { path: 'home/:mMenu/:ddMenu', component: TheBengalNewsArticlesByMenuComponent },
  { path: 'home/:articletitle', component: TheBengalNewsArticleComponent },
  { path: 'tbnadminsignup', component: AdminSignupComponent,canActivate:[AuthGuard]  },
  { path: 'tbnadminlogin', component: AdminLoginComponent },
  { path: 'tbn-admin-dashboard', component: AdminDashboardComponent,canActivate:[AuthGuard] },
  { path: 'articles', component: AdminArticlesComponent,canActivate:[AuthGuard]  },
  { path: 'create-article', component: AdminCreateArticleComponent,canActivate:[AuthGuard] },
  { path: 'edit-article/:articleId', component: AdminEditArticleComponent,canActivate:[AuthGuard]  },
  { path: 'manage-menus', component: AdminMenusComponent,canActivate:[AuthGuard]  },
  { path: 'edit-menus/:mainMenuId', component: AdminEditMenusComponent,canActivate:[AuthGuard]  },
  { path: 'keywords', component: AdminKeywordComponent,canActivate:[AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }