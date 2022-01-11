import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
  @Input() produit:any = null;

  constructor() { }


  ngOnInit(): void {
  }

}
