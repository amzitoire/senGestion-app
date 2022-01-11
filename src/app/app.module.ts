import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionProduitComponent,
    ProduitComponent,
    AddProduitComponent,
    DetailsProduitComponent,
    EditProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
