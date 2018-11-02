import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {ApiService} from '../Services/api.service';

@Component({
  selector: 'app-tagbox',
  templateUrl: './tagbox.component.html',
  styleUrls: ['./tagbox.component.css']
})
export class TagboxComponent implements OnInit {
  @Output() clickedButton = new EventEmitter();
  tags: string[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTags()
      .subscribe((data) => {
        this.tags = data['tags'];
        console.log(this.tags);
      });
  }

  emitClickedButton(tag: string) {
    this.clickedButton.emit(tag);
  }

}
