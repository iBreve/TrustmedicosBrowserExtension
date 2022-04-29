import { Component, OnInit } from '@angular/core';

import { addDoc, Firestore, collection, getDocs } from '@angular/fire/firestore'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: any = []
  constructor(private firestore: Firestore, private router: Router) {
  }

  ngOnInit(): void {
    this.readData()
  }

  async readData() {
    var d = collection(this.firestore, 'urls')

    await getDocs(d).then((resp) => {

      this.results = [...resp.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })

    console.log(this.results)
  }

  review(item: any) {
    console.log(item)
    this.router.navigate(['/review'], { state: { item } })


  }
}
