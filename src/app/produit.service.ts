import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  Produits: Array<Produit> = []; 
  constructor() {
    this.addProduit(new Produit( 1,'produit 4',120,'description 2'))
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
       
    editProduit(a:Produit){}
    detailsProduit(a:Produit){return a}
}
 

