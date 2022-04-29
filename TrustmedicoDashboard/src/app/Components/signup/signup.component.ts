import { Component, OnInit } from '@angular/core';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from "@angular/router"

import { updateDoc, setDoc, doc, Firestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  uname: any
  email: any
  password: any
  cpassword: any
  constructor(private auth: Auth, private router: Router, private firestore: Firestore) { }

  user_id: any
  ngOnInit(): void {
  }

  async register() {

    if (this.password != this.cpassword) {
      alert("Password did not math")
    }
    else {
      createUserWithEmailAndPassword(this.auth, this.email, this.password).then((resp) => {
        this.user_id = resp.user.uid

        console.log(this.user_id)
        var document = doc(this.firestore, 'users', this.user_id)
        this.firestore
        setDoc(document, {
          "name": this.uname,
          "mail": this.email,
          "trust_score": 0
        }).then((resp) => {
          console.log(resp)
        }).catch((err) => {
          console.log(err)
        })
        alert("Successfully Registered\n Please Login")
        this.router.navigate(['/login'])
      }).catch((err) => {
        alert(err)
      })



    }
  }

}
