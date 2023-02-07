//Variables

let NbPeche = document.getElementById("nbPeches").value;
let NbPomme = document.getElementById("nbPommes").value;

//Créer une liste de fruit pour après appeler la fonction avec cette liste.
let nom = document.


let ConditionVente = document.getElementById("conditions").valueOf();

let PrixPeches = document.getElementById("prixPeches").textContent;
PrixPeches


////////////////////////////////////
class Fruit {

    //Constructeur
    Fruit(nom, prix, qte) {
        this.nom = nom;
        this.prix = prix;
        this.qte = qte;
        //this.sous - total = prix * qte; //comment faire un champ calculé?
    }

    //Méthode qui calcule et renvoie le sous-total
CalculerSousTotal(){
        return this.prix * this.qte;
    }
}
/////////////////////////////////////////
//Fonction qui créer un fruit
function () {

    //Remplir les variables avec les valeurs
    let Prix = document.getElementById("prixPeches").value;
    let NbPeche = document.getElementById("nbPeches").value;

    //Appeler le constructeur pour créer un fruit
    const Peches = new Peches("Pêche", Prix , NbPeche)
}
///////////////////////////////////////////////

//Fonction qui met à jour le sous-total après un changement
function Calculer_SousTotal() {

//Mettre à jour le total
    let ancienPrix = document.getElementById("total").innerText;
    let nouveauPrix = +ancienPrix + +prix;  //+varible : convertir en numérique
    document.getElementById("Total").innerText = nouveauPrix;
}


//fonction qui rend disponible le submit
function Submit() {
    if (toute les
    validations
    sont
    correct
)
    {
        document.getElementById("submit").setAttribute("disabled").remove;
    }
}