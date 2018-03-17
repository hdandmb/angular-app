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
  showExtended true;
  loaded = false;
  buttonAddNewUser = true;
  currentClasses: {};
  currentStyles: {};



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
        image: 'http://lorempixel.com/600/600/people/5',
        isActive: true,
        balance: 100,
        registered: new Date('06/03/2018 08:12:02' )
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
        image: 'http://lorempixel.com/600/600/people/8',
        isActive: true,
        balance: 168,
        registered: new Date('12/28/2016 03:16:18' )
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
        image: 'http://lorempixel.com/600/600/people/7',
        isActive: false,
        balance: 698,
        registered: new Date('07/02/2017 06:23:31' )
      }
    ];

    this.loaded = true;

  /*  this.addUser({
      firstName: 'Ren',
      lastName: 'Nates',
      image: 'http://lorempixel.com/600/600/people/1'
    });*/

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses( ) {
    this.currentClasses = {
      'btn-success': this.buttonAddNewUser
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'text-align' : this.showExtended ? '0' : 'center',
      'padding-top' : this.showExtended ? '0' : '85px',
      'font-size' : this.showExtended ? '' : '40px'
    }
  }

}
