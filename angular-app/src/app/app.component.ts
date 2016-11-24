import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private http: Http, @Inject('API_URL') private apiUrl: string) {
    http.get(`${apiUrl}/api/`)
      .subscribe(response => {
        const data = response.json();
        this.title = data.test;
      });
  }
}
