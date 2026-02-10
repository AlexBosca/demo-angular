import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular';

  users: any[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${environment.apiUrl}/demo`).subscribe((data) => {
      console.log(data);
      this.users = data as any[];
    });
  }

  // createUser() {
  //   const user = { "name": 'Another User' };

  //   return this.http.post(`${environment.apiUrl}/demo`, user).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
