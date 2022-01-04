import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {
  produits:Array<any>=[];
  constructor() { }
  
  deleteproduit(produit: any) {
    this.produits = this.produits.filter( (elt) => (elt !== produit) );
    }
  ajouterproduit(produit: any) {
      this.produits.push(produit);
    }
  modifierProduit(produit: any){
    this.produits = this.produits.filter( (elt) => (elt !== produit) );
    }
  detailsProduit(produit: any){
    this.produits = this.produits.filter( (elt) => (elt !== produit) );
    }
  ngOnInit(): void {
    this.produits=[{nom: "produit 1", prix: 140},{nom: "produit 2", prix: 140},{nom: "produit 3", prix: 150}];
  }
}
