import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  //Child


  //Input Decorator Check
  // @Input('parentData')
  // public name;

  //Output Decorator Check
  // @Output() public childEvent = new EventEmitter();

  user: any;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.user = res.id;
      //console.log(this.user)
    })
  }

  ngOnInit() {
    this.data.getUser(this.user).subscribe(result => this.user = result)
  }

  // fireEvent(){
  //   this.childEvent.emit("TEST MARTASI");
  // }

}
