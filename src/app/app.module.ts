import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionListItemComponent } from './question-list-item/question-list-item.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UserProfileNameComponent } from './user-profile-name/user-profile-name.component';
import { ApiService } from './Services/api.service';
import { AuthService } from './Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TagboxComponent } from './tagbox/tagbox.component';
import { TagButtonComponent } from './tag-button/tag-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionsListComponent,
    QuestionListItemComponent,
    HeaderComponent,
    UserProfileNameComponent,
    TagboxComponent,
    TagButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
