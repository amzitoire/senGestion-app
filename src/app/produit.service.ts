import { Injectable } from '@angular/core';
import { Produit } from './produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
url: string = 'http://localhost:3000/produits'
  Produits: Array<Produit> = []; 
  constructor(private http: HttpClient) {
  this.getAllJson().subscribe( data => this.pushALL(data) );
   
  }

    getAll(){ return this.Produits; } 
    addProduit(a:Produit) { this.Produits.push(a); }
    deleteProduit(a:Produit) { 
      // this.Produits.filter( (elt) => (elt !== a) );
     let index = this.Produits.indexOf(a);
        if (index > -1) {
          this.Produits.splice(index, 1);
        }
       }
       
    detailsProduit(a:Produit){return a}

    pushALL(produits: Array<Produit>) {
      produits.forEach(element => {
        this.Produits.push(element);
      });
    }
    getAllJson(){
      return this.http.get<Array<Produit>>(this.url);
    }
    addProduitJson(a:Produit)
    {
      return this.http.post<Produit>(this.url,a);
    }
    deleteproduitsJson(id: number) {
     const url = `${this.url}/${id}`;
     return this.http.delete(url);
   }
 
   updateJson(produit:Produit,id:number) {
     const url = `${this.url}/${id}`;
     return this.http.put(url,produit)
   }
}
 

