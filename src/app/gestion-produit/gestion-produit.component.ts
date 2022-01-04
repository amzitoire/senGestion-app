import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {
  //produits:Array<any>=[];
  produits:Array<Produit> = [];
  detailsProduit: any;

  constructor(private produitService:ProduitService) { }
  
  deleteproduit(produit: any) {
    //  this.produits = this.produits.filter( (elt) => (elt !== produit) );
     this.detailsProduit=null;
     this.produitService.deleteProduit(produit);
     
    for (let index = 0; index < this.produits.length; index++) {
      const element =this.produits[index];
      element.setId = index+1;
      
    }

    }
  ajouterproduit(produit: any) {
      // this.produits.push(produit);
      
      let a = new Produit( 1 + this.produits.length,produit.nom,produit.prix,produit.description)
      //a.setId = 1 + this.produits.length;
      // a.setNom = produit.nom;
      // a.setPrix = produit.prix;
      // a.setDescription = produit.description;
      this.produitService.addProduit(a);

      // console.log(this.produitService.getAll())
      // this.produits= this.produitService.getAll();
    }

  modifierProduit(produit: any){}

  setdetailsProduit(produit: any){
   this.detailsProduit = this.produitService.detailsProduit(produit);
    }
  getdetailsProduit(){
    return this.detailsProduit;
    }

  ngOnInit(): void {
    this.produits= this.produitService.getAll();
  }
}
