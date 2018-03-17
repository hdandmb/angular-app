import {
  Component,
  OnInit
} from '@angular/core';

import {
  User
} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];

  showExtended = true;
  loaded = false;
  buttonAddNewUser = true;


  constructor() {}

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '476 Yale ave',
          city: 'Spring Field',
          state: 'Co'
        },
        image: 'http://lorempixel.com/600/600/people/5'
      },
      {
        firstName: 'Mary',
        lastName: 'Jameson',
        age: 56,
        address: {
          street: '31 Cole st',
          city: 'New York',
          state: 'NY'
        },
        image: 'http://lorempixel.com/600/600/people/8'
      },
      {
        firstName: 'Latesha',
        lastName: 'Banks',
        age: 22,
        address: {
          street: '4019 Kakashi st',
          city: 'Denver',
          state: 'Co'
        },
        image: 'http://lorempixel.com/600/600/people/7'
      }
    ];

    this.loaded = true;

  /*  this.addUser({
      firstName: 'Ren',
      lastName: 'Nates',
      image: 'http://lorempixel.com/600/600/people/1'
    });*/
  }


  addUser(user: User) {
    this.users.push(user);
  }
}
