export class Produit {
    constructor(private id:number,private nom:string,private prix:number,private description:string){}
    
    get getId():number{return this.id}
    set setId(id:number){this.id = id}
     
    get getNom():string{return this.nom}
    set setNom(nom:string){this.nom = nom}
     
    get getPrix():number{return this.prix}
    set setPrix(prix:number){this.prix = prix}
     
    get getDescription():string{return this.description}
    set setDescription(description:string){this.description = description}


}
