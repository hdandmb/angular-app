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
        }
      },
      {
        firstName: 'Mary',
        lastName: 'Jameson',
        age: 56,
        address: {
          street: '31 Cole st',
          city: 'New York',
          state: 'NY'
        }
      },
      {
        firstName: 'Latesha',
        lastName: 'Banks',
        age: 22,
        address: {
          street: '4019 Kakashi st',
          city: 'Denver',
          state: 'Co'
        }
      }
    ];

    this.addUser({
      firstName: 'Ren',
      lastName: 'Nates',
      age: 23,
      address: {
        street: '39 Main st',
        city: 'Boise',
        state: 'Idaho'
      }
    });
  }


  addUser(user: User) {
    this.users.push(user);
  }
}
