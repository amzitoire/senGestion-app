import { Component, Injectable, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { elementAt } from 'rxjs';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})

export class GestionProduitComponent implements OnInit {
 search:Array<Produit> = [];
  
  produits:Array<Produit> = [];
  detailsProduit: any;
  editProduit: any;

  constructor(private produitService:ProduitService) { }

  handleSearch(myForm: NgForm) {
   
   this.search= this.produitService.search(myForm.value.search);
    if (this.search.length) {
       this.produits = this.search;
    }
    myForm.reset();
  }
  
  deleteproduit(produit: any) {
    this.detailsProduit=null;
     this.editProduit = null;
     if (confirm("Voulez vous vraiment supprimer  le produit ? ") == true) {
      this.produitService.deleteProduit(produit);
      this.produitService.deleteProduitsJson(produit.id).subscribe();
    } 
    }
  ajouterproduit(produit: any) {
    var id =1;
    for (let index = 0; index < this.produits.length; index++) {
      const element =this.produits[index];
      if (element.getId >id){
        id=element.getId+1
      }
    };

      let a = new Produit( id,produit.nom,produit.prix,produit.description);
      
      this.produitService.addProduit(a);
      this.produitService.addProduitJson(a).subscribe();
    }
  modifierProduit(produit: any){ 
    let a = new Produit(  this.produitService.getProduit(this.editProduit).getId,produit.nomEdit,produit.prixEdit,produit.descriptionEdit);
    this.produitService.editProduit(this.produitService.getProduit(this.editProduit),a);
    this.produitService.updateJson(a,a.getId).subscribe();
    this.detailsProduit=null;
    this.editProduit = null;
   
    
  }
  cancelModifierProduit(produit: any){ 
    this.detailsProduit=null;
    this.editProduit = null;
    
  }
  setmodifierProduit(produit: any){
    this.editProduit = this.produitService.getProduit(produit);
  }
  getmodifierProduit(){
    return this.editProduit;
  }

  setdetailsProduit(produit: any){
   this.detailsProduit = this.produitService.getProduit(produit);
    }
  getdetailsProduit(){
    return this.detailsProduit;
    }

  ngOnInit(): void {
  
       this.produits= this.produitService.getAll();
    
  }
  
}
