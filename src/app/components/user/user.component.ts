import { Component, OnInit } from '@angular/core';

import {User } from '../../models/User';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']

})

export class UserComponent implements OnInit {
    // Properties
   user: User;

   // Methods
   constructor() {
       this.user = {
           firstName: 'John',
           lastName: 'Doe',
           age: 30,
           address: {
               street: '476 Yale',
               city: 'Spring Field',
               state: 'Co'
           }
       };
   }

   ngOnInit() {

   }
}

