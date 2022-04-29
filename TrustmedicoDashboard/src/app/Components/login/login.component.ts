import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any
  password: any
  constructor(private auth: Auth, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email)
    console.log(this.password)
    signInWithEmailAndPassword(this.auth, this.email, this.password).then((resp) => {
      this.router.navigate(['home'])
    }).catch((err) => {
      alert(err.message)
    })
  }
}
