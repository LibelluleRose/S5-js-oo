
//Déclaration de la class Fruit
class Fruit {

    //Constructeur
    Fruit(nom, prix, qte) {
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
    if (fruit === "peche"){
        SacPeches.qte = SacPeches.qte + 1;
        let totalpeche = SacPeches.CalculerSousTotal();
        document.getElementById("totalPeches").textContent = totalpeche;
    }
    else if (fruit === "Poires"){
        SacPoires.qte = SacPoires.qte + 1;
        let totalpoire = SacPoires.CalculerSousTotal();
        document.getElementById("totalPoires").textContent = totalpoire;
    }
    else if (fruit === "Pommes"){
        SacPommes.qte = SacPommes.qte + 1;
        let totalpomme = SacPommes.CalculerSousTotal();
        document.getElementById("totalPommes").textContent = totalpomme;
    }

    //mise à jour du total
    let total = CalculerMontantFinal() //calculer montant
    document.getElementById("total").textContent = total; //inscrire montant
}


function load(){

    //Création de trois fruit à partir de la class fruit
    let NbSacPeches = +document.getElementById("nbPeches").value; //le + c'est pour déclarer que c'est une valeur numérique
    let NbSacPoires = +document.getElementById("nbPoires").value;
    let NbSacPommes = +document.getElementById("nbPommes").value;

    let PrixSacPeches = +document.getElementById("prixPeches").value;
    let PrixSacPoires = +document.getElementById("prixPoires").value;
    let PrixSacPommes = +document.getElementById("prixPommes").value;

    SacPeches = new Fruit("SacPeches", PrixSacPeches, NbSacPeches);
    SacPoires = new Fruit("SacPoires", PrixSacPoires, NbSacPoires);
    SacPommes = new Fruit("SacPommes", PrixSacPommes, NbSacPommes);

}















