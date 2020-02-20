import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
//Components
import { AppComponent } from './app.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminCreateArticleComponent } from './admin-create-article/admin-create-article.component';
import { AdminEditArticleComponent } from './admin-edit-article/admin-edit-article.component';
import { AdminEditMenusComponent } from './admin-edit-menus/admin-edit-menus.component';
import { AdminKeywordComponent } from './admin-keyword/admin-keyword.component';
import { AdminMenusComponent } from './admin-menus/admin-menus.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { VideoDialogComponent, SafePipe } from './video-dialog/video-dialog.component';
import { AppRoutingModule } from './app-routing.module';

//Http
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


//Material Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialogModule} from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';


import { TheBengalNewsHomeComponent } from './the-bengal-news-home/the-bengal-news-home.component';
import { NewsFlashComponent } from './news-flash/news-flash.component';

// import social buttons module
import { TheBengalNewsArticlesByMenuComponent } from './the-bengal-news-articles-by-menu/the-bengal-news-articles-by-menu.component';
import { TheBengalNewsArticleComponent } from './the-bengal-news-article/the-bengal-news-article.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AuthGuard } from './auth/auth.guard';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { AdminSocialComponent } from './admin-social/admin-social.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
// import { ShareButtonModule  } from 'ngx-sharebuttons';

@NgModule({
  declarations: [
    AppComponent,
    AdminArticlesComponent,
    AdminCreateArticleComponent,
    AdminEditArticleComponent,
    AdminEditMenusComponent,
    AdminKeywordComponent,
    AdminMenusComponent,
    UploadImageComponent,
    VideoDialogComponent,
    SafePipe,
    TheBengalNewsHomeComponent,
    NewsFlashComponent,
    TheBengalNewsArticlesByMenuComponent,
    TheBengalNewsArticleComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminSignupComponent,
    MobileHeaderComponent,
    AdminSocialComponent,
    SocialButtonsComponent
    
  ],
  imports: [
    BrowserModule,
    OrderModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatSortModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    // ShareButtonModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [VideoDialogComponent]
})
export class AppModule { }
