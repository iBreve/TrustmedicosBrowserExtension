import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  data:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.data = this.router.getCurrentNavigation()?.extras.state

    console.log(this.data)
  }

}
