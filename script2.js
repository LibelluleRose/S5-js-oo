
//Déclaration de la class Fruit
class Fruit {

    //Constructeur
    Fruit(nom = "", prix = 0, qte = 0) {
        this.nom = nom;
        this.prix = prix;
        this.qte = qte;
    }

    //Méthode qui calcule et affiche le sous-total
    CalculerSousTotal() {
        let newSousTotal = this.prix * this.qte;
        return newSousTotal;
    }
}

//Fonction qui calcule le montant final
function CalculerMontantFinal() {
    let MontantTotalFinal = SacPeches.CalculerSousTotal() +
        SacPoires.CalculerSousTotal() +
        SacPommes.CalculerSousTotal();


    return MontantTotalFinal;

}

//Fonction qui met à jour et affiche les différents totaux
function MiseAJour(fruit) {

    //Ajouter sac pour le fruit rentré en param
    //calculer le nouveau sous-total
    //Inscrire le nouveau sous-total
    if (fruit === "Peche"){
        // SacPeches.qte = SacPeches.qte + 1; //lire le inuput au lieu de faire +1
        let qtepeche = document.getElementById("nbPeches").values;
        totalpeche = SacPeches.CalculerSousTotal();
        document.querySelector("#nbPeches").textContent = totalpeche + " $";
    }
    else if (fruit === "Poires"){
        SacPoires.qte = SacPoires.qte + 1;
        totalpoire = SacPoires.CalculerSousTotal();
        document.querySelector("#nbPoires").textContent = totalpoire + " $";
    }
    else if (fruit === "Pommes"){
        SacPommes.qte = SacPommes.qte + 1;
        totalpomme = SacPommes.CalculerSousTotal();
        document.querySelector("#nbPommes").textContent = totalpomme + " $";
    }

    //mise à jour du total
    let total = CalculerMontantFinal() //calculer montant
    parseInt(document.getElementById("total").textContent) = +total + " $"; //inscrire montant
    //parseInt(document.getElementById("id ici").textcontent)//exemple de pierre-luc
}


function load(){

    //Création de trois fruit à partir de la class fruit
    const NbSacPeches = parseInt().document.getElementById("nbPeches").value; //le + c'est pour déclarer que c'est une valeur numérique
    const NbSacPoires = document.getElementById("nbPoires").value;
    const NbSacPommes = document.getElementById("nbPommes").value;

    const PrixSacPeches = document.getElementById("prixPeches").value;
    const PrixSacPoires = document.getElementById("prixPoires").value;
    const PrixSacPommes = document.getElementById("prixPommes").value;

    SacPeches = new Fruit("SacPeches", PrixSacPeches, NbSacPeches);
    SacPoires = new Fruit("SacPoires", PrixSacPoires, NbSacPoires);
    SacPommes = new Fruit("SacPommes", PrixSacPommes, NbSacPommes);

}


sessionStorage.setItem("panier", panier);
return true













