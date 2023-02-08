
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
    let MontantTotalFinal = NbSacPeches.CalculerSousTotal() +
        NbSacPoires.CalculerSousTotal() +
        NbSacPommes.CalculerSousTotal();

    return MontantTotalFinal;

}

//Fonction qui met à jour et affiche les différents totaux
function MiseAJour() {
    //Ajouter sac
    SacPeches.qte = SacPeches.qte + 1;


    //mise à jour des sous-totaux
    let totalpeche = NbSacPeches.CalculerSousTotal();
    let totalpoire = NbSacPoires.CalculerSousTotal();
    let totalpomme = NbSacPommes.CalculerSousTotal();

    document.getElementById("totalPeches").textContent = totalpeche;
    document.getElementById("totalPoires").textContent = totalpoire;
    document.getElementById("totalPommes").textContent = totalpomme;

    //mise à jour du total
    let total = CalculerMontantFinal()
    document.querySelector(#total).textContent = MontantTotalFinal;
}

///////////////////////////////////////////////////////////////////////////////
//Programme principale
//////////////////////////////////////////////////////////////////////////////

//Création de trois fruit à partir de la class fruit
let NbSacPeches = document.getElementById("nbPeches").value;
let NbSacPoires = document.getElementById("nbPoires").value;
let NbSacPommes = document.getElementById("nbPommes").value;

let PrixSacPeches = document.getElementById("prixPeches").value;
let PrixSacPoires = document.getElementById("prixPoires").value;
let PrixSacPommes = document.getElementById("prixPommes").value;


const SacPeches = new Fruit(SacPeches, PrixSacPeches, NbSacPeches);
const SacPoires = new Fruit(SacPoires, PrixSacPoires, NbSacPoires);
const SacPommes = new Fruit(SacPommes, PrixSacPommes, NbSacPommes);












