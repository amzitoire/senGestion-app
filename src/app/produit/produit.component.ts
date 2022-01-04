import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor() { }
  @Input() produit:any;
  @Output() produitToDelete:EventEmitter<any> = new EventEmitter();
  @Output() produitToEdit:EventEmitter<any> = new EventEmitter();
  @Output() produitDetails:EventEmitter<any> = new EventEmitter();

handleDelete(){ this.produitToDelete.emit(); }
handleEdit(){ this.produitToEdit.emit(); }
handleDetails(){ this.produitDetails.emit(); }

  describeproduit(produit: any) {
    return ` ${produit.nom} prix: ${produit.prix} $`;
  }
  ngOnInit(): void {
   

  }

}
