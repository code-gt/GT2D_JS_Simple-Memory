/* VARIABLES */

  // Création du tableau contenant les cartes (10 paires)
   const cartes = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 
    'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
  
  // Mélanger aléatoirement un tableau
  cartes.sort(() => Math.random() - 0.5);
  
  // Variables pour le plateau de jeu *plateau*, le message *texteSucces* et le compteur *compteurPaires*
  
  // Variable `cartesRetournees` type tableau vide pour suivre les cartes retournées
  let cartesRetournees = [];

  // Variable `cartesTrouvees` type tableau vide pour suivre les cartes assorties
  let cartesTrouvees = [];

  // Variable pour le compteur de paires
  let nombrePaires = 0;


/* FUNCTIONS */

  // Fonction pour créer les éléments des cartes
function creerCarte(valeur, index) {
    // Création d'un nouvel élément div pour représenter la carte avec 'createElement()'
  
    // Ajout de la class 'carte' avec 'classList.add()'

    // Définition de l'attribut de données 'index' pour garder une trace de l'index de la carte avec 'dataset.index'

    // Définition du contenu texte de la carte au paramètre 'valeur' avec 'textContent'
  
    // Lorsque la carte est cliquée avec un écouteur d'évènement
    // la fonction retournerCarte est appelée avec la carte en paramètre

    // Ajout de la carte en tant qu'enfant du conteneur de jeu avec 'appendChild()'
}


// Fonction pour retourner une carte
function retournerCarte(carte) {
  // Vérifie si la carte n'est pas déjà retournée et n'est pas déjà assortie
  if (!cartesRetournees.includes(carte) && !cartesTrouvees.includes(carte)) {
    
    // Ajouter la class 'retourne' avec 'classList.add()'

    // Ajouter la carte à la liste des cartes retournées gràce à la méthode 'push()'

    // Si deux cartes sont retournées, vérifier avec 'verifierPaire' si elles correspondent après 1 seconde
  }
}

// Fonction pour vérifier si les cartes retournées correspondent
function verifierPaire() {
  
  // Destructuration pour obtenir les deux cartes retournées
  const [carte_1, carte_2] = cartesRetournees;

  // Récupérer les textes des cartes dans des variables avec 'textContent'

 
  // Vérifie si les valeurs des cartes correspondent
  if (/*condition*/) {
    // Si les valeurs correspondent, ajouter les cartes assorties à la liste des cartes assorties gràace à 'push()'
   
    // Ajouter la classe 'succes' avec 'classList.add()'

    // Incrémenter le compteur de paires assorties et mettre à jour le contenu du compteur de paires assorties avec 'textContent'

    // Afficher le message de succès (caché de base en CSS) et le masquer le message de succès après 2 secondes

    // Vérifier si toutes les cartes ont été assorties grâce à 'length' et afficher un message avec 'alert()'
    if (/*condition*/) {
     
    }
  } 
  
  else {
        setTimeout(function() {
        // Si les valeurs des cartes ne correspondent pas, retirer la classe 'retourne'
        }, 500)
  }
  // Réinitialiser la liste des cartes retournées

}

  // Créer les cartes sur le plateau de jeu avec une boucle
