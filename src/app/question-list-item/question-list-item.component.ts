import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IQuestion } from 'src/Models/Question.model';
import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.css']
})
export class QuestionListItemComponent implements OnInit {
  @Input() questionData: IQuestion;
  isLoggedIn: boolean;

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
