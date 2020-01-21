import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  configUrl = 'http://127.0.0.1:5000/predictions/' + 1;
  fetchedActivity = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getRecommendations();
  }

  getRecommendations() {

    this.http.get(this.configUrl).subscribe(

      (response: any[]) => this.fetchedActivity = response,

      (error) => console.log(error)

    );

  }

}
