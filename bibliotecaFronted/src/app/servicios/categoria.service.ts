import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../modelos/categoria';

//URL DEL BACKEND
const BASE_URL: string = 'http://localhost:8000';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias:Array<Categoria> = new Array<Categoria>();

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]>{    
    return this.http.get<Categoria[]>(BASE_URL+'/categoria/api/')
  }

}
