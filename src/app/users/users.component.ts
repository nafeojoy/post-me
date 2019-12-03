import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

@Component({ //It's a class decorator
  selector: 'app-users', // Element Selector (Class- ".app-users" and Property "[app-users]" are 2 others)
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms',
            animate('550ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms',
            animate('550ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })))
        ], { optional: true })
      ])
    ])
  ]
})

export class UsersComponent implements OnInit {
  //Parent
  // Input Decorator Check (Property Decorator)
  // public name = "Nafeo";
  // public message = "";

  users: Object;

  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getUsers().subscribe(res => {
      this.users = res;
    })
  }

}
