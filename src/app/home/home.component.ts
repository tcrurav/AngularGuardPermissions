import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginAsUser(){
    this.authService.login("ROLE_USER").subscribe(response => {
      this.router.navigateByUrl("/user");
    });
    
  }

  loginAsAdmin(){
    this.authService.login("ROLE_ADMIN").subscribe(response => {
      this.router.navigateByUrl("/admin");
    });
  }
}
