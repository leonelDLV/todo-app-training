import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-frontend';

  usersCollection: any = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/users')
    .subscribe(response => {
      this.usersCollection = response;
      console.log(this.usersCollection);
      // for (const user in this.usersCollection) {
      //   console.log(user.email);
      // }
    });
  }
}