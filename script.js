//Variables

let NbPeche = document.getElementById("nbPeches").value;
let NbPomme = document.getElementById("nbPommes").value;

//Créer une liste de fruit pour après appeler la fonction avec cette liste.
let nom = document.let
ConditionVente = document.getElementById("conditions").valueOf();

let PrixPeches = document.getElementById("prixPeches").textContent;
PrixPeches


////////////////////////////////////
class SacFruit {

    //Constructeur
    SacFruit(nom, prix, qte) {
        this.nom = nom;
        this.prix = prix;
        this.qte = qte;
        //this.sous - total = prix * qte; //comment faire un champ calculé?
    }

    //Méthode qui calcule et affiche le sous-total
    CalculerSousTotal() {
        let newSousTotal = this.prix * this.qte;
        // document.querySelector(#nbPeches).textContent = newSousTotal;
        //  this.CalculerMontantFinal();
        return newSousTotal;
    }

    CalculerMontantFinal() {
        let MontantTotalFinal = SacPeches.CalculerSousTotal() +
            SacPoires.CalculerSousTotal() +
            SacPommes.CalculerSousTotal();
        document.querySelector(#total).textContent = MontantTotalFinal;
    }
}

/////////////////////////////////////////
class Panier {
    //Constructeur
    Panier(SacFruit) {
        this.SacFruit = SacFruit();
        this.Total = 0;

    }

    CalculerMontantFinal() {
        let MontantTotalFinal = SacPeches.CalculerSousTotal() +
            SacPoires.CalculerSousTotal() +
            SacPommes.CalculerSousTotal();
        document.querySelector(#total).textContent = MontantTotalFinal; //le mettre dans le code principal?
        return MontantTotalFinal;
    }
}

//Fonction qui créer un fruit
function CreerFruit() {

        //Remplir les variables avec les valeurs
        let prixPeches = document.getElementById("prixPeches").value;
        let NbPeche = document.getElementById("nbPeches").value;

        //Appeler le constructeur pour créer un fruit
        const SacPeches = new SacFruit("Pêche", Prix, NbPeche)


        //Remplir les variables avec les valeurs
        let prixPoires = document.getElementById("prixPoires").value;
        let NbPoire = document.getElementById("nbPeches").value;

        //Appeler le constructeur pour créer un fruit
        const SacPeches = new SacFruit("Pêche", Prix, NbPeche)


        //Remplir les variables avec les valeurs
        let Prix = document.getElementById("prixPeches").value;
        let NbPoire = document.getElementById("nbPeches").value;

        //Appeler le constructeur pour créer un fruit
        const SacPeches = new SacFruit("Pêche", Prix, NbPeche)



///////////////////////////////////////////////

//Fonction qui met à jour le sous-total après un changement
    function Calculer_SousTotal() {

//Mettre à jour le total
        let ancienPrix = document.getElementById("total").innerText;
        let nouveauPrix = +ancienPrix + +prix;  //+varible : convertir en numérique
        document.getElementById("Total").innerText = nouveauPrix;
    }

//Fonction qui ajuste tout les totaux
    function

    AjusterTotal() {
        Panier.
    }
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
//////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////


