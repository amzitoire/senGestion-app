import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor() { }

  @Output() produitToAdd: EventEmitter<any> = new EventEmitter();

  handleAdd(myForm: NgForm) {
    this.produitToAdd.emit(myForm.value);
    myForm.reset();
  }

  ngOnInit(): void {
  }

}
