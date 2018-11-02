import { Component, OnInit, Input, OnChanges, SimpleChanges,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { IQuestion } from 'src/Models/Question.Model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions: IQuestion[];
  pageNumber = 1;
  questionsCount: number;
  activeTag = null;
  activeKeyword = null;
  activeAuthor = null;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeTag = this.route
      .queryParams
      .subscribe(params => {
        this.activeTag = params['tag'];
        this.activeKeyword = params['keyword'];
        this.activeAuthor = params['author'];
        console.log('query param changed');
        // Defaults to 0 if no query param provided.
        // this.page = +params['page'] || 0;
        this.retreiveQuestions(this.pageNumber, this.activeTag, this.activeKeyword, this.activeAuthor);
      });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.questions = null;
  //   this.retreiveQuestions();
  // }

  loadPage(pageNumber: number) {
    this.questions = null;
    this.retreiveQuestions(pageNumber, this.activeTag, this.activeKeyword, this.activeAuthor);

  }

  retreiveQuestions(pageNumber: number = 1, activeTag: string, activeKeyword: string, activeAuthor: string) {
    if (this.pageNumber === pageNumber && this.pageNumber !== 1) {
      return;
    }
    this.pageNumber = pageNumber;
    this.apiService.getQuestions(pageNumber, activeTag, activeKeyword, activeAuthor)
      .subscribe(
        (data) => {
          this.questions = data['questions'];
          this.questionsCount = data['questionsCount'];
        },
        (error) => this.router.navigate(['/404'])
      );
    }
}
