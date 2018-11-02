import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '../../Models/User.model';
@Component({
  selector: 'app-user-profile-name',
  templateUrl: './user-profile-name.component.html',
  styleUrls: ['./user-profile-name.component.css']
})
export class UserProfileNameComponent implements OnInit {
  @Input() userName: string;

  constructor() { }

  ngOnInit() {
  }

}
