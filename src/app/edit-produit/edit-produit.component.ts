import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../produit';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  constructor() { }
  @Input() produit:any = null;
  @Output() produitToEdit: EventEmitter<any> = new EventEmitter();
  @Output() produitCancelEdit: EventEmitter<any> = new EventEmitter();

  handleEdit(myFormE: NgForm) {
    this.produitToEdit.emit(myFormE.value);
    
  }
  handleCancel(){
   this.produitCancelEdit.emit();
  }

  ngOnInit(): void {
  
  }

}
