import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fundos',
  templateUrl: './fundos.component.html',
  styleUrls: ['./fundos.component.css']
})
export class FundosComponent implements OnInit {

  fundos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFundos();
  }

  getFundos() {
    this.fundos = this.http.get('http://localhost:5000/api/values').subscribe(response =>
    {
      this.fundos = response;
    }, error => {
      console.log(error);
    }
    );
  }

}
