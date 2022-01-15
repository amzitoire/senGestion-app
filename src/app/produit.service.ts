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
     let index = this.Produits.indexOf(a);
        if (index > -1) {
          this.Produits.splice(index, 1);
        }
       }
       
    getProduit(a:Produit){return a}

    editProduit(a:Produit,b:Produit){ 
      let index = this.Produits.indexOf(a);
      if (index > -1) {
        this.Produits[index]=b;
      }
     }
    pushALL(produits: Array<any>) {
      produits.forEach(element => {
        this.Produits.push(new Produit(element.id,element.nom,element.prix,element.description));
      });
    }
    getAllJson(){
      return this.http.get<Array<Produit>>(this.url);
    }
    addProduitJson(a:Produit)
    {
      return this.http.post<Produit>(this.url,a);
    }
    deleteProduitsJson(id: number) {
     const url = `${this.url}/${id}`;
     return this.http.delete(url);
   }
 
   updateJson(produit:Produit,id:number) {
     const url = `${this.url}/${id}`;
     return this.http.put<Produit>(url,produit);
   }
   search(string:any,){
     let search:Array<Produit>=[];
     for (var i = 0; i < this.Produits.length; i++){
      // look for the entry with a matching `code` value
      if (this.Produits[i].getNom == string){
        search.push(this.Produits[i])
      }
    }
    
    if(search.length){ 
      alert( search.length+" produit(s) trouvé(s)...");
      return search;
    }else{
      alert("Aucun produit trouvé...");
      alert("Tous les produits sont affichés...")
      return this.Produits;
     
    }
  
   }
}
 

