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
    let a = new Produit(  this.produitService.detailsProduit(this.editProduit).getId,produit.nomEdit,produit.prixEdit,produit.descriptionEdit);
   
    // this.produitService.addProduit(a);
    // this.produitService.deleteProduit(this.produitService.detailsProduit(this.editProduit));
    this.produitService.editProduit(this.produitService.detailsProduit(this.editProduit),a);
    this.produitService.updateJson(a,a.getId).subscribe();
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


    // sortid(){

    //   for (let index = 0; index < this.produits.length; index++) {
    //     let element:Produit=this.produits[index];
    //      const idTE=element.getId;
    //     element.setId=index+1;
    //     this.produitService.updateJson(element,idTE).subscribe();
    //   }
    // }

  ngOnInit(): void {
    
    this.produits= this.produitService.getAll();
  }
  
}
