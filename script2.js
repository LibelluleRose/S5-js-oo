
//Déclaration de la class Fruit
class Fruit {

    //Constructeur
    Fruit(nom = "Fruit", prix = 0, qte = 0) {
        this.nom = nom;
        this.prix = prix;
        this.qte = qte;
    }

    //Méthode qui calcule et affiche le sous-total
    CalculerSousTotal() {
        let newSousTotal = +this.prix * +this.qte;
        return +newSousTotal;
    }
}

//Fonction qui calcule le montant final
function CalculerMontantFinal() {
    let MontantTotalFinal = +(SacPeches.CalculerSousTotal()) +
        +(SacPoires.CalculerSousTotal()) +
            +(SacPommes.CalculerSousTotal());


    return MontantTotalFinal;

}

//Fonction qui met à jour et affiche les différents totaux
function MiseAJour(fruit) {

    //Ajouter sac pour le fruit rentré en param
    //calculer le nouveau sous-total
    //Inscrire le nouveau sous-total
    if (fruit === "Peche"){
        // SacPeches.qte = SacPeches.qte + 1; //lire le inuput au lieu de faire +1
        SacPeches.qte = +document.getElementById("nbPeches").value;
        SacPeches.prix = parseInt(document.getElementById("prixPeches").value);
        totalpeche = SacPeches.CalculerSousTotal();
        document.querySelector("#nbPeches").textContent = totalpeche + " $";
    }
    else if (fruit === "Poires"){
        SacPoires.qte = +document.getElementById("nbPoires").value;
        SacPoires.prix = +document.getElementById("prixPoires").value;
        totalpoire = SacPoires.CalculerSousTotal();
        document.querySelector("#nbPoires").textContent = totalpoire + " $";
    }
    else if (fruit === "Pommes"){
        SacPommes.qte = +document.getElementById("nbPommes").value;
        SacPommes.prix = +document.getElementById("prixPommes").value;
        totalpomme = SacPommes.CalculerSousTotal();
        document.querySelector("#nbPommes").textContent = totalpomme + " $";
    }

    //mise à jour du total
    let total = CalculerMontantFinal() //calculer montant
    document.getElementById("total").textContent = +total + " $"; //inscrire montant
    //parseInt(document.getElementById("id ici").textcontent)//exemple de pierre-luc
}


function load(){

    /*//Création de trois fruit à partir de la class fruit
    const NbSacPeches = 0;//document.getElementById("nbPeches").value; //le + c'est pour déclarer que c'est une valeur numérique
    const NbSacPoires = 0;//document.getElementById("nbPoires").value;
    const NbSacPommes = 0;//document.getElementById("nbPommes").value;

    const PrixSacPeches = 0;//document.getElementById("prixPeches").value;
    const PrixSacPoires = 0;//document.getElementById("prixPoires").value;
    const PrixSacPommes = 0;//document.getElementById("prixPommes").value;

    SacPeches = new Fruit("SacPeches", PrixSacPeches, NbSacPeches);
    SacPoires = new Fruit("SacPoires", PrixSacPoires, NbSacPoires);
    SacPommes = new Fruit("SacPommes", PrixSacPommes, NbSacPommes);
*/
    SacPeches = new Fruit("SacPeches", 0, 0);
    SacPoires = new Fruit("SacPoires", 0, 0);
    SacPommes = new Fruit("SacPommes", 0, 0);
}


//sessionStorage.setItem("panier", panier);
//return true













