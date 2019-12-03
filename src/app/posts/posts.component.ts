import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  //Types of Data Binding
  // - String Interpolation 
  // - Property Binding 
  private check:boolean = true; //Check <button>

  // - Event Binding 
  chengedValue:string = "OK";

  // - Two Way Data Binding 

  posts: Object;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.getPosts().subscribe(res=> this.posts = res)
  }

  onCheck(val){
    console.log(val)
    this.chengedValue = val;
  }

}
