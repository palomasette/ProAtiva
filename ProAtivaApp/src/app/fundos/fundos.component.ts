import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fundos',
  templateUrl: './fundos.component.html',
  styleUrls: ['./fundos.component.css']
})
export class FundosComponent implements OnInit {

  _filtroLista: string;
  get filtroLista(){
    return this._filtroLista;

  }
  set filtroLista(value: string){
    this._filtroLista= value;
    this.fundosFiltrados = this.filtroLista ? this.filtrarFundos(this.filtroLista) : this.fundos;
  }

  fundosFiltrados: any = [];
  fundos: any = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFundos();
  }

  filtrarFundos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.fundos.filter (
      fundo => fundo.nomeFundo.toLocaleLowerCase().indexOf(filtrarPor)!= -1
    );
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
