import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../app/article';
import { MainMenu } from '../app/mainMenu';
import { DdMenu } from '../app/ddMenu';
import { Keyword } from '../app/keyword';
import { User } from '../app/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TbnadminService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Articles

  // HttpClient API get() method => Fetch articles list
  getArticles(): Observable<Article> {
    return this.http.get<Article>(this.apiURL + '/articles')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  
  // HttpClient API get() method => Fetch articles list based on main & dd menu
  getArticlesByMenu(mMenu,ddMenu): Observable<Article> {
    return this.http.get<Article>(this.apiURL + '/articlesMenu/'+ mMenu + '/' + ddMenu)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch article
  getArticle(id): Observable<Article> {
    return this.http.get<Article>(this.apiURL + '/articles/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch article by Title
  getArticleByTitle(title): Observable<Article> {
    return this.http.get<Article>(this.apiURL + '/article/' + title)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API post() method => Create article
  createArticle(article): Observable<Article> {
    return this.http.post<Article>(this.apiURL + '/articles', JSON.stringify(article), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update article
  updateArticle(id, article): Observable<Article> {
    return this.http.put<Article>(this.apiURL + '/articles/' + id, JSON.stringify(article), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete article
  deleteArticle(id) {
    return this.http.delete<Article>(this.apiURL + '/articles/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Menus

  // HttpClient API get() method => Fetch mainMenus list
  getMainMenus(): Observable<MainMenu> {
    return this.http.get<MainMenu>(this.apiURL + '/mainMenus')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch mainMenu
  getMainMenu(id): Observable<MainMenu> {
    return this.http.get<MainMenu>(this.apiURL + '/mainMenus/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API post() method => Create mainMenu
  createMainMenu(mainMenu): Observable<MainMenu> {
    return this.http.post<MainMenu>(this.apiURL + '/mainMenus', JSON.stringify(mainMenu), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update mainMenu
  updateMainMenu(id, mainMenu): Observable<MainMenu> {
    return this.http.put<MainMenu>(this.apiURL + '/mainMenus/' + id, JSON.stringify(mainMenu), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete mainMenu
  deleteMainMenu(id) {
    return this.http.delete<MainMenu>(this.apiURL + '/mainMenus/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch ddMenus list
  getDdMenus(): Observable<DdMenu> {
    return this.http.get<DdMenu>(this.apiURL + '/ddMenus')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch ddMenu
  getDdMenu(id): Observable<DdMenu> {
    return this.http.get<DdMenu>(this.apiURL + '/ddMenus/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API post() method => Create ddMenu
  createDdMenu(ddMenu): Observable<DdMenu> {
    return this.http.post<DdMenu>(this.apiURL + '/ddMenus', JSON.stringify(ddMenu), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update ddMenu
  updateDdMenu(id, ddMenu): Observable<DdMenu> {
    return this.http.put<DdMenu>(this.apiURL + '/ddMenus/' + id, JSON.stringify(ddMenu), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete ddMenu
  deleteDdMenu(id) {
    return this.http.delete<DdMenu>(this.apiURL + '/ddMenus/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch keywords list
  getKeywords(): Observable<Keyword> {
    return this.http.get<Keyword>(this.apiURL + '/keywords')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch keyword
  getKeyword(id): Observable<Keyword> {
    return this.http.get<Keyword>(this.apiURL + '/keywords/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API post() method => Create keyword
  createKeyword(keyword): Observable<Keyword> {
    return this.http.post<Keyword>(this.apiURL + '/keywords', JSON.stringify(keyword), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update keyword
  updateKeyword(id, keyword): Observable<Keyword> {
    return this.http.put<Keyword>(this.apiURL + '/keywords/' + id, JSON.stringify(keyword), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete keyword
  deleteKeyword(id) {
    return this.http.delete<Keyword>(this.apiURL + '/keywords/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //HttpClient User SignUp
  signUp(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/signup', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //HttpClient User Login
  logIn(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/login', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
