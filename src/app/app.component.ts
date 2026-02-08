import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${environment.apiUrl}/demo`).subscribe((data) => {
      console.log(data);
    });
  }

  createUser() {
    const user = { "id": 100, "name": 'Another User' };

    return this.http.post(`${environment.apiUrl}/demo`, user).subscribe((data) => {
      console.log(data);
    });
  }
}
