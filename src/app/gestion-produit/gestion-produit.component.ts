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
  editProduit: any;

  constructor(private produitService:ProduitService) { }
  
  deleteproduit(produit: any) {
    //  this.produits = this.produits.filter( (elt) => (elt !== produit) );
     this.detailsProduit=null;
     this.editProduit = null;
     this.produitService.deleteProduit(produit);
     
    this.sortid();
    }
  ajouterproduit(produit: any) {
      let a = new Produit( 1 + this.produits.length,produit.nom,produit.prix,produit.description);
      this.produitService.addProduit(a);
    }
  modifierProduit(produit: any){ 
    let a = new Produit(  this.produitService.detailsProduit(this.editProduit).getId,produit.nomEdit,produit.prixEdit,produit.descriptionEdit);
    
    this.produitService.addProduit(a);
    this.produitService.deleteProduit(this.produitService.detailsProduit(this.editProduit));
    this.detailsProduit=null;
    this.editProduit = null;
   
    
  }
  cancelModifierProduit(produit: any){ 
    this.detailsProduit=null;
    this.editProduit = null;
   
    
  }

  setmodifierProduit(produit: any){
    this.editProduit = this.produitService.detailsProduit(produit);
  }
  getmodifierProduit(){
    return this.editProduit;
  }

  setdetailsProduit(produit: any){
   this.detailsProduit = this.produitService.detailsProduit(produit);
    }
  getdetailsProduit(){
    return this.detailsProduit;
    }
    sortid(){

      for (let index = 0; index < this.produits.length; index++) {
        const element =this.produits[index];
        element.setId = index+1;
        
      }

    }

  ngOnInit(): void {
    this.produits= this.produitService.getAll();
  }
}
