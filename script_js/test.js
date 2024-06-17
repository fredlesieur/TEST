/* let prenom = prompt("Comment vous appelez-vous ?");
let nb1 = parseFloat(prompt(prenom + ", donnez-moi un premier nombre : "));
let nb2 = parseFloat(prompt(prenom + ", donnez-moi un deuxième nombre : "));

let continuer =true;

    while (true) {
        let operation = prompt(prenom + ", saisissez 's' pour obtenir la somme ou 'p' pour obtenir le produit : ");

            if (operation === 's') {
        let somme = nb1 + nb2;
        alert("La somme de " + nb1 + " + " + nb2 + " = " + somme);
        break;
    }       else if (operation === 'p') {
        let produit = nb1 * nb2;
        alert("Le produit de " + nb1 + " X " + nb2 + " = " + produit);
        break;
    }       else {
        alert("Erreur : saisissez 's' pour la somme ou 'p' pour le produit !");
    }
    while (continuer) {
}

let reponse = prompt("Voulez-vous continuer ? (Oui/Non): ");

    if (reponse.toLowerCase() !== "oui") {
        continuer = false;  // Si la réponse n'est pas "Oui", sortir de la boucle
    }
}

console.log("Fin du programme.");

 */
// Fonction pour vérifier si une valeur est un entier
/* function estnombre(valeur) {
    return !isNaN(valeur);
}

// Fonction pour demander à l'utilisateur de saisir un nombre entier
function saisirNombre(message) {
    let nombre;
    do {
        nombre = parseFloat(prompt(message));
    } while (!estnombre(nombre));
    return nombre;
}

// Fonction principale
function main() {
    let prenom = prompt("Entrez votre prénom :");
    let nombre1 = saisirNombre("Entrez le premier nombre entier :");
    let nombre2 = saisirNombre("Entrez le deuxième nombre entier :");

    let operation = prompt("Voulez-vous la somme (tapez 's') ou le produit (tapez 'p') ?");

    let resultat1;
    let resultat2;
    if (operation === 's') {
        resultat1 = nombre1 + nombre2;
    } else if (operation === 'p') {
        resultat2 = nombre1 * nombre2;
    } else {
        alert("Veuillez entrer 's' pour la somme ou 'p' pour le produit.");
        return; // Sortir du programme
    }

        if (operation ==='s') {
        alert(`Bonjour ${prenom} ! ${"le resultat de " + nombre1 + ' + ' +  nombre2 + " est " + resultat1}`);
    }
        else {
        alert(`Bonjour ${prenom} ! ${"le resultat de " + nombre1 + ' x ' +  nombre2 + " est " + resultat2}`);
    
            }
            let recommencer = confirm("Voulez-vous recommencer ?");
    if (recommencer) {
        main(); // Appeler la fonction principale à nouveau
    } else {
        alert("Merci d'avoir utilisé ce programme. Au revoir !");
    }
}

// Démarrer le programme
main();
 */
/* let nombre1=prompt("saisir un nombre")
let nombre2=prompt("saisir un deuxieme nombre different")
let max = Math.max (nombre1,nombre2)
alert ("le nombre le plus grand est " + max) */
/* let a,b,c,d;
prompt("saisir votre prenom");
a= parseInt (prompt ("saisir un 1er nombre"));
b= parseInt (prompt ("saisir un 2eme nombre"));
c= parseInt (prompt ("saisir un 3ème nombre"));
d=2;
if (a===3){
    a=2;
    b=(a+c)*d;
} else if(a===0){
    a=2;
    c=d*a;
} else {
    c=1+b;
    d=b-a;
}

alert ("a= "+ a +" ,b= " + b+" ,c= "+c) */
/* a=(prompt("saisir un nombre"));
b=(prompt("saisir un deuxieme nombre"));
if (a>0 && b>0 || a<0 && b<0){
    alert ("le produit de " + a + " x" + b + " est positif")
} else {
    alert ("le produit de " + a + " x" + b + " est négatif"); 
} */
// Demander à l'utilisateur de saisir un nombre
/* const nombre = parseInt(prompt("Entrez un nombre :"));

// Afficher la table de multiplication jusqu'à 10
for (let i = 1; i <= 10; i++) {
    const resultat = nombre * i;
    console.log(resultat)
}
  */
/*  var result = '';
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        result += (i * j) + ' ';
    }
    result += '\n'; // Nouvelle ligne pour chaque table de multiplication
}

console.log(result); */
/* var variable = parseInt(prompt("Entrez un nombre :"));


    for (var i = 1; i <= 10; i++) {
        var result = variable * i;
        console.log(`${variable} x ${i} = ${result}`);
    } */
 /*    let tableau = ["Apple", "HP", "Acer"];

    let marques = "";
    
    for (let i of tableau) {
      marques += i + ", ";
    }
    
    console.log (marques);
    let tableau2 = ["Apple", "HP", "Acer"];

    for (let i of tableau2) {
      console.log(i);
    } */
  /*   let nombres = "";

nb = 120;

for ( let i=0;i<=10;i++){
  nombres += nb + " ";
nb++;
}

console.log (nombres); */
/* let total = 0;

let prix = [27, 36, 89, 18, 25];

for (let i of prix) {
    total+=i;
   
}
*/
/* let nombre = 8;

let multiples = "";

for (let index = 1; index <=20; index++) {
   
   multiples+=(nombre * index + " ");


}

console.log (multiples); */
/* let marques = ["Apple", "Acer", "HP", "Packard-Bell"];

for (let i of marques) {
    if (i=="Apple"||i=="Dell"||i=="HP"||i=="Microsoft"){
console.log("la marque est valide");
} 
    else {
    console.log ("la marque n'est pas valide");

} 
} */
/* let ordinateur = new Object();

ordinateur.ram = 256;

ordinateur.stockage = 512;
for (let i in key =>ordinateur) {
    console.log (ordinateur[key]);
} */
/* let ordinateur = new Object();

ordinateur.ram = 256;

ordinateur.stockage = 512;

for (let i in ordinateur) {
  console.log (i + " = " + ordinateur[i]);
} */

/* let nombre =0  ;
while (nombre <= 15) {
    nombre += 2;
    nombre -=0.5;
  console.log ("Le nombre est : " + nombre);
    
} */

/* let cv = 100;

do {
  console.log ("La voiture a " + cv + " cv");
  cv ++;
} while (cv > 101 && cv <= 115); */
/* 
let a = 120;

while (typeof(a) == "number" && (a >= 100 && a <= 140)) {
  a++;
    console.log(a);
} */
/* 
let a = 110;

while (a >= 100 && a <= 150) {
  
  console.log(a);
  a += 10;

  if (a == 130) {
    continue;
  }
  else if (a == 140) {
    break;
  }

  console.log("nv");
}

console.log("fini");
*/
/* let nombre = 28;
let compteur = 1; 

while ((nombre * compteur)<200) {
  console.log(nombre * compteur);
  compteur ++;
} */
/* 
let prix = 100;
let tabPrix = [];
do {
tabPrix.push(prix);
prix ++;
}
while (prix > 100 && prix <= 110) {
  
}

console.log(tabPrix); */
/* 
let prix = 101;
let tabPrix = [];

while (prix > 100 && prix <= 110) {
  tabPrix.push(prix);
  if (prix == 108) {
    break;
  }
  prix ++;
}

console.log(tabPrix[2]); */
/* 
let compteur = 0;

let nombres = "";

while (compteur < 20) {
  nombres += compteur + " ";
 compteur++;
}

console.log (nombres);
 */
/* 
let nombre = 15;

compteur = 1;

while (compteur <= nombre) {
  if (compteur % 2 == 0) {
    console.log(compteur + " est un multiple de 2");
  }
  else {
    console.log (compteur + " n'est pas un multiple de 2");
  }
  compteur ++;
} */


/* 
const list = [24, 67, 18];

let resultat = "";
for (i of list) {
    resultat+= " les diviseurs de " + i + " sont : ";
    let compteur = 1;
 while (compteur <= i) {
    if (i % compteur == 0) {
        resultat += compteur + ", ";
}

   compteur ++;
 }
 resultat += "\n \n";
}
console.log (resultat); */

/* const list = [24, 67, 18];

let resultat = "";

for (const i of list) {
    console.log ("les diviseurs de " + i + " sont : ");
    for (let compteur = 1 ; compteur < i; compteur++) {
    resultat+= compteur + ", ";
        if (i%compteur==0) {
            console.log(resultat);
        }
    }
    
}

console.log(resultat); */
/* const nombre = 10;

let table = [];

for (let i = 1; i <= 10; i ++) {
  let resultat = nombre * i;
  table.push(resultat);
  console.table(resultat)
} */

/* const nombre = 10;

let table = [];

for (let i = 1; i <= 10; i ++) {
  let resultat = nombre * i;
  table.push(resultat);
}

console.table(table); // = 40 (10 x 4) */

/* let animation = new Animation();

for (let i in animation) {
  console.log(i);
} */
/* 
let tableau = ["Apple", "HP", "Acer"];

let marques = "";

for (let i of tableau) {
  marques += i + ", ";
}

console.log (marques); */
/* 
let nombre = 8;

let multiples = "";

for (let index = 0; index <=20; index++) {
  multiples+=(nombre * index) + " , ";
  
}

console.log (multiples); */
/* 
let ordinateur = new Object();

ordinateur.ram = 256;

ordinateur.stockage = 512;

for (let i in ordinateur) {
  console.log (i + " = " + ordinateur[i]);
} */
/* let stock = 4029;
let solde = 0;

const vendre =(produit,prix) => {
let total=(produit * prix);
stock-=produit
solde+=total
return total

}

console.log(vendre(104,10.5))
console.log(`le solde total = ${solde} euros`)
console.log(`le stock du magasin = ${stock} produits`)
 */
/* const nombre= new Number(1256753);
console.log(nombre) */
/* const a = new Number(10);

const b = new Number(12);

const produit=()=> {
  mult =a*b
  return mult
}

console.log(produit (a*b)) ; */
/* 
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return 'Number NaN';
  }
  if (isNaN(x)) {
    return 'NaN';
  }
}

console.log(typeOfNaN('100F'));
// Expected output: "NaN"

console.log(typeOfNaN(NaN));
// Expected output: "Number NaN" */
/*  const nombre = new Number(1000000)

console.log(nombre.toExponential(1)); //1.3578e+4

console.log(nombre.toExponential(2)); //1.36e+4 */

/* console.log(Object.getOwnPropertyNames(Number.prototype)); */
/* 
const nombre = new Number(1678);

const entier =(i) => {
return Number.isInteger(i.valueOf())
}
console.log(entier(nombre)) */

/* const nombre = new Number(3167830918);
console.log(nombre.toString().length) */

/* const nombreTest = new Number(152670);

const multiDix =(i)=> {
    return (i.valueOf() % 10 ==0)
  }

console.log(multiDix(nombreTest)); */

/*   let prix = new Number(250)

const prixValide = (i) => {
  let estEntier = Number.isInteger(i.valueOf()) && (i >=500 && i <= 1500);
  return estEntier;
}
 */
/* console.log(prixValide(prix))  */
/* let historique = new String("(réf : 775533) commandé le 25/03/2020 10 sacs riz");
console.log(historique.slice(7, 13));
console.log(historique.split("")); */
/* let chaine1 = 'Le renard brun et rapide saute par-dessus le chien endormi.';
let chaine2 = 'chien';
let chaine3 = chaine1.indexOf(chaine2) ;
console.log(`l’index du ${chaine2} à partir du commencement est ${chaine3}`); */


  //propriétés définies sur une valeur primitive
  
  //Nous créons un objet en enveloppant la valeur "undefined"
/* 
let monObjet = new Object();

//On crée 2 propriétés dans notre objet

monObjet = {
  nom:"mon objet",
  caracteristiques:"aucune"
};

//Quelques méthodes statiques

console.log(Object.keys(monObjet)); //renvoie les clés des propriétés définies
console.log(Object.values(monObjet)); //renvoie les valeurs des propriétés définies
console.log(Object.entries(monObjet)); //renvoie les paires clés/valeurs des propriétés définies

//Quelques méthodes d'instance

console.log(monObjet.valueOf()); //renvoie la valeur primitive de l'objet, donc l'objet même
console.log(monObjet.toString()); //renvoie une chaîne représentant l'objet
console.log(monObjet.hasOwnProperty("nom")); //renvoie un booléen si l'objet a la propriété passée comme argument. Ne prend pas en compte les propriétés héritées "par défaut" du prototype Object.prototype  */

//Nous créons un Boolean en enveloppant la valeur "true"/* 

/* let monObjet = new Boolean(true);

//Quelques méthodes d'instance héritées de Boolean.prototype

console.log(monObjet.valueOf()); //renvoie la valeur enveloppée

console.log(monObjet.toString()); // renvoie une chaîne contenant la valeur enveloppée

//Quelques méthodes statiques de Object :

//Ces méthodes renvoient un tableau vide car nous n'avons défini aucune propriété

console.log(Object.keys(monObjet)); //renvoie les clés des propriétés définies

console.log(Object.values(monObjet)); //renvoie les valeurs des propriétés définies

console.log(Object.entries(monObjet)); //renvoie les paires clé/valeur des propriétés définies

monObjet = new String("chaîne de caractères");

//Un exemple de méthode statique

console.log(String.fromCharCode(67, 72, 65, 73, 78, 69)); //renvoie une chaîne composée des caractères unicode passés comme arguments, dans cet exemple : "CHAINE"

//Quelques méthodes d'instance

console.log(monObjet.charAt(4)); */ //renvoie le caractère de la chaîne stockée ayant l'index passé comme argument
 //*/console.log(monObjet.slice(7, 9)); //renvoie une sous-chaîne de la chaîne d'origine, en utilisant l'index de début et de fin spécifiés
/* monObjet = new Date('2000-12-18T03:24:00');

console.log(monObjet.valueOf());

console.log(monObjet.toString()); */
/* number.prototype.nombre=24
number.prototype.produit =()=>{
return nombre * nombre

}
let i = new number(1)
console.log(i.nombre)
i.produit() */
/* 
function MonNombre(nombre) {
  this.nombre = nombre;
}

MonNombre.prototype.produit = function() {
  return this.nombre * this.nombre;
};

let i = new MonNombre(14);
console.log(i.nombre); // 
console.log(i.produit()); // 

Number.prototype.message= "hello world"
Number.prototype.message2=function() {
  console.log(" this my country ")  
}
let nb = new number (1)
console.log(nb.message)
nb.message2() */
/* 
let telephone=new Object()

telephone = {
marque:new String("apple"),
modele:new String("iphone 14"),
ram:new Number(4),
stockage:new Number("128"),
prix:new Number(1200),

ajouter : function (montant) {
  return this.prix += montant;
},

retirer : function (montant) {
  return this.prix-= montant;
},
 afficher: function (){
  console.log(`le prix du produit est ${this.prix}`)
 },

}
telephone.ajouter(200);
telephone.retirer(600);
telephone.afficher();
 */

/* 

let produit=new Object() 
produit = {
marque : new String ("apple"),
modele : new String ("iphone11"),
ram : new Number (4),
stockage: new Number (128),
prix : new Number (1200),

ajouter : function(i){
 return this.prix+=i;
},
retirer : function (i) {
  return this.prix-=i;
},
afficher : function (){
return this.prix
},
}
produit.ajouter(200)
produit.retirer(400)
console.log(produit.afficher()) */

/* class Telephone {

  static SMART_PHONE =("smart phone")

  marque 
  modele 
  capacite
  prix

  constructor (marque,modele,capacite,prix) {
    this.marque=marque
    this.modele=modele
    this.capacite=capacite
    this.prix=prix
  }
}
let tel1 =new Telephone("apple","iphone14",64,699)
Object.keys(tel1).forEach(i => {
  console.log(`${i}: ${tel1[i]}`);
  });
 */
/* class Personne {
 
  constructor (prenoms,noms,ages){
this.prenoms=prenoms
this.noms=noms
this.ages=ages
  }
}
const personne1 = new Personne("Peter", "Parker", 20);
console.log(personne1.ages); */

/* class Voiture {
  static ROUES=4
  constructor (marque,modele,annee){
    this.marque=marque
    this.modele=modele
    this.annee=annee
  }
}
const voiture1 = new Voiture('Renault', 'Clio', 2020);
console.log(`${voiture1.marque} à ${Voiture.ROUES} roues`); */

/* class Rectangle {
  constructor (longueur,largeur){
    this.longueur=longueur
    this.largeur=largeur
  }
}

const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.largeur);  */
/* 
class Telephone {
  constructor(marque, modele, ram) {
    this.marque = marque;
    this.modele = modele;
    this.ram = ram;
  }
}

const t1 = new Telephone ("apple","phone11",4)

console.log(t1.ram); */
/* 
class Ordinateur {

  //définition de propriétés statiques
    
    static OBJETS_PRIS_EN_CHARGE = "ordinateurs";
  
    //définition de propriétés de classe
  
    type = "laptop";
    clavier = "azerty";
  
    //définition du constructeur
  
    constructor(marque, ram, stockage) {
      this.marque = marque;
      this.ram = ram;
      this.stockage = stockage;
    }
   */
    //définition de méthodes statiques
  
/*     static definition() {
      console.log("Les ordinateurs sont des machines automatisées permettant le traitement d'informations.");
    }
  
    //définition de méthodes d'instance
  
    ficheProduit() {
      console.log("Marque : " + this.marque + "\n" + "Mémoire vive : " + this.ram + "\n" + "Stockage : " + this.stockage);
    }
  
    calcPrice() {
      return this.ram * 100 + this.stockage * 2;
    }
  
    addRam(value) {
      return this.ram += value;    
    }
  }
  //instanciation de Ordinateur
  let monOrdi = new Ordinateur("Apple", 8, 512);
  let monOrdi2 = new Ordinateur("HP", 16, 256);
  //appel methode static (classe Objet:Ordinateur)
  Ordinateur.definition();
  //appel methode d instance (instance de Telephone (mon ordi (value=8=)))
  console.log(monOrdi.addRam(8)); */
/* 

  class Salaire {
  constructor (salarie) {
    this.salarie=salarie
    this.paie=null
    console.log("")
  }
  calculSalaire(taux, heures) {
    return this.paie += taux * heures
  }
  afficheSalaire(){
    console.log (` ${this.salarie} votre salaire est de ${this.paie} $`)
  }
}
const salaire1=new Salaire("Frederic Lesieur")
salaire1.calculSalaire(25,140)
salaire1.afficheSalaire() */
/* class Ordinateur{
  constructor (marque,modele){
  this.marque=marque
  this.modele=modele
}
}
const ordinateur=new Ordinateur ("HP","pavillon")
console.log(ordinateur.marque) */
/* 
class Rectangle {
  constructor (largeur, longueur) {
    this.largeur=largeur
    this.longueur=longueur
  }
   perimetre(){
      return 2 * (this.largeur+this.longueur)
    }
  }
  const monRectangle = new Rectangle(15, 14);
console.log(monRectangle.perimetre()); */
/* 
class Cercle {
  constructor(rayon) {
    this.rayon = rayon;
  }
aire (){
  return Math.PI*(this.rayon)**2
}
perimetre (){
  return Math.PI * this.rayon * 2

}
  }

cercle = new Cercle(4);

console.log(cercle.aire());
console.log(cercle.perimetre()) */

/* class Produit {
  constructor(marque) {
    this._marque = marque;
  }

get marque() {
 return this._marque
}
  }


produit = new Produit("HP");

console.log(produit.marque); */

/* class Produit {
  constructor(marque) {
    this._marque = marque;
  }

  get marque() {
    return this._marque;
  }

  set marque (value){
    this._marque =value
  }
}

produit = new Produit("HP");

produit.marque = "Acer" ; */

//console.log(produit.marque);

/* class Ecouteur {

  static BOITE=true
  static NB_ECOUTEUR=2
constructor(marque,sansFil, prix){
  this.marque=marque
  this.sansFil=sansFil
  this.prix=prix
}
fiche(){
  for (let property in this) {
    console.log( `${property} : ${this[property]}`)
  } 
} 
}
const ecouteurs1 = new Ecouteur("JBL", true, 50)
ecouteurs1.fiche();
console.log("\n")
const ecouteurs2 = new Ecouteur("Bose", "false", 20);
ecouteurs2.fiche() 



class Panier{

  static contenu=[]

  static ajouter(obj){
    this.contenu.push(obj)
  }
  static retirer(obj){
    this.contenu.splice(this.contenu.indexOf(obj),1)
  }
  static afficher(){
    for(let produit of this.contenu) {
    console.log (produit.marque);
    }
  }
}
Panier.ajouter(ecouteurs1); //On ajoute l'objet ecouteurs1 du panier

Panier.ajouter(ecouteurs2); //On ajoute l'objet ecouteurs2 du panier

Panier.retirer(ecouteurs1);  //On retire écouteur1 du panier

Panier.afficher(); //On affiche la marque de tous les objets présents dans le panier */
/* 
class Ecouteur {

  //propriétés de classe
  
  boite = true;
  nbEcouteurs = 2;

  //constructeur et propriétés d'instance

  constructor(marque, sansFil, price) {
    this.marque = marque;
    this.sansFil = sansFil;
    this.prix = price;
  }
  
  fiche() {
    for(let property in this) {
      console.log(property + " : " + this[property]); 
    }
  }
}

const ecouteurs1 = new Ecouteur("JBL", true, 50);
const ecouteurs2 = new Ecouteur("Bose", "false", 20);

class Panier {

  //propriété statique
  
  static contenu = new Array();

  //méthodes statiques

  static addToPanier(obj) {
    this.contenu.push(obj);
  }
static rmToPanier(obj) {
    this.contenu.splice(this.contenu.indexOf(obj), 1);
  } //on utilise la méthode splice pour retire 1 item à partir de l'index de l'item ayant pour valeur obj

  static affPanier() {
    for(let produit of this.contenu) {
      console.log (produit.marque);
    }
  }
}

Panier.addToPanier(ecouteurs1); //On ajoute l'objet ecouteurs1 du panier

Panier.addToPanier(ecouteurs2); //On ajoute l'objet ecouteurs2 du panier

Panier.rmToPanier(ecouteurs1);  //On retire écouteur1 du panier

Panier.affPanier(); //On affiche la marque de tous les objets présents dans le panier */

