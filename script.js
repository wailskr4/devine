const devinettes = [

  {
    question: "Je suis l’organe qui abrite le bébé pendant neuf mois. Je suis…",
    options: ["L’utérus", "Le vagin", "Les ovaires", "La vessie"],
    reponse: "L’utérus"
  },
  {
    question: "Je transporte les spermatozoïdes et fais partie du système masculin. On m'appelle…",
    options: ["La prostate", "L’urètre", "Le testicule", "Le canal déférent"],
    reponse: "Le canal déférent"
  },
  {
    question: "Quel organe masculin produit les spermatozoïdes ?",
    options: ["La prostate", "Le canal déférent", "Le testicule", "L’urètre"],
    reponse: "Le testicule"
  },
  {
    question: "Quel organe contrôle de nombreuses fonctions en envoyant des hormones dans le sang ?",
    options: ["La moelle osseuse", "Le pancréas", "La thyroïde", "Le cœur"],
    reponse: "La thyroïde"
  },
	 {
    question: "Quel fruit est rouge, croquant, et souvent associé à la tentation ?",
    options: ["Pomme", "Cerise", "Fraise", "Pastèque"],
    reponse: "Pomme"
  },
  {
    question: "Quel légume orange est riche en bêta-carotène et bon pour les yeux ?",
    options: ["Carotte", "Tomate", "Poivron", "Courge"],
    reponse: "Carotte"
  },
  {
    question: "Quel fruit jaune est connu pour sa richesse en potassium ?",
    options: ["Banane", "Mangue", "Citron", "Pêche"],
    reponse: "Banane"
  },
  {
    question: "Quel légume vert a des feuilles que l’on mange souvent en salade ?",
    options: ["Chou", "Épinard", "Laitue", "Brocoli"],
    reponse: "Laitue"
  },
  {
    question: "Quel fruit est vert à l’extérieur, rouge à l’intérieur, et plein de pépins noirs ?",
    options: ["Pomme", "Melon", "Pastèque", "Kiwi"],
    reponse: "Pastèque"
  },
	 {
    question: "Quel moyen de transport vole dans le ciel et relie rapidement deux pays éloignés ?",
    options: ["Voiture", "Train", "Avion", "Bateau"],
    reponse: "Avion"
  },
  {
    question: "Quel document est obligatoire pour voyager à l’étranger ?",
    options: ["Carte bancaire", "Permis de conduire", "Passeport", "Carte de bibliothèque"],
    reponse: "Passeport"
  },
  {
    question: "Comment s’appelle le lieu où l’on dort lorsqu’on est en vacances et que l’on paie pour une chambre ?",
    options: ["Gare", "Restaurant", "Hôtel", "Musée"],
    reponse: "Hôtel"
  },
  {
    question: "Quel moyen de transport roule sur des rails et relie souvent les grandes villes ?",
    options: ["Bus", "Train", "Taxi", "Camion"],
    reponse: "Train"
  },
	 {
    question: "Quel sandwich chaud contient souvent du steak, du fromage, de la salade et est servi dans un pain rond ?",
    options: ["Tacos", "Kebab", "Burger", "Panini"],
    reponse: "Burger"
  },
  {
    question: "Quel accompagnement croustillant est souvent servi avec un hamburger ?",
    options: ["Chips", "Riz", "Frites", "Légumes"],
    reponse: "Frites"
  },
  {
    question: "Quelle boisson gazeuse sucrée est très populaire dans les fast-foods ?",
    options: ["Eau", "Jus d’orange", "Limonade", "Coca-Cola"],
    reponse: "Coca-Cola"
  },
	 {
    question: "Quel dessert glacé est souvent proposé en fin de repas dans un fast-food ?",
    options: ["Gâteau", "Crème glacée", "Crêpe", "Pudding"],
    reponse: "Crème glacée"
  },
	  {
    question: "Elle vient de Tlemcen, aime les mêmes choses que moi, et partage ma vie chaque jour. Qui est-ce ?",
    options: ["Ma cousine", "Ma sœur", "mon épouse", "Ma voisine"],
    reponse: "mon épouse"
  },
  {
    question: "Elle aime ce que j’aime, comprend mes silences, et rend mes projets plus beaux. De qui s’agit-il ?",
    options: ["Une amie", "Ma mère", "Ma collègue", "Nesrine"],
    reponse: "Nesrine"
  }
];


let index = 0;
let score = 0;

const elements = {
  riddle: document.getElementById("riddle"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  nextBtn: document.getElementById("next"),
  progressBar: document.getElementById("progress-bar"),
  scoreEl: document.getElementById("score"),
  restartBtn: document.getElementById("restart")
};

function chargerDevinette() {
  elements.feedback.textContent = "";
  elements.nextBtn.style.display = "none";
  elements.nextBtn.disabled = true; // Désactiver bouton Suivante
  elements.options.innerHTML = "";
  elements.scoreEl.classList.add("hidden");
  elements.restartBtn.classList.add("hidden");
		document.getElementById("final-score").innerHTML = "";
 document.getElementById("final-message").textContent = "";
  const devinetteActuelle = devinettes[index];
  elements.riddle.textContent = devinetteActuelle.question;

  const pourcentage = (index / devinettes.length) * 100;
  elements.progressBar.style.width = `${pourcentage}%`;

  devinetteActuelle.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => verifierReponse(option));
    elements.options.appendChild(btn);
  });
}
function updateScoreDisplay() {
  document.getElementById('score-value').textContent = score;
}

function verifierReponse(reponseChoisie) {
  const reponseCorrecte = devinettes[index].reponse;
  const tousBoutons = document.querySelectorAll(".option-btn");

  tousBoutons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === reponseCorrecte) {
      btn.style.backgroundColor = "#4CAF50";
    } else if (btn.textContent === reponseChoisie && reponseChoisie !== reponseCorrecte) {
      btn.style.backgroundColor = "#f44336";
    }
  });

  if (reponseChoisie === reponseCorrecte) {
    elements.feedback.textContent = "Bonne réponse !";
    elements.feedback.style.color = "#4CAF50";
  score++;
  updateScoreDisplay(); 
  } else {
    elements.feedback.textContent = `Faux ! La bonne réponse était : ${reponseCorrecte}`;
    elements.feedback.style.color = "#f44336";
  }

  elements.nextBtn.style.display = "inline-block";
  elements.nextBtn.disabled = false; // ✅ Active le bouton Suivante
}

function afficherResultatFinal() {
  elements.riddle.textContent = "Bravo, tu as terminé toutes les devinettes !";
  elements.options.innerHTML = "";
  elements.feedback.textContent = "";
  elements.nextBtn.style.display = "none";
  elements.progressBar.style.width = "100%";

  let messageFinal = "";
  if (score >= 13) {
    messageFinal = "Bravo 7abibti tu a fais un super travail ^^";
  } else if (score >=8) {
    messageFinal = "Pas mal bébé tu peux faire mieux";
  } else {
    messageFinal = "encore un effort zine jss tu peux faire mieux";
  }

  // Insère les résultats dans les bons éléments du HTML
  document.getElementById("final-score").innerHTML = `
    Tu as obtenu <strong>${score}</strong> bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""} 
    sur <strong>${devinettes.length}</strong>.
  `;
  document.getElementById("final-message").textContent = messageFinal;

  // Affiche la boîte de résultats
  elements.scoreEl.classList.remove("hidden");
  elements.restartBtn.classList.remove("hidden");
}


function reinitialiserJeu() {
  index = 0;
  score = 0;
  chargerDevinette();

}

// Événements
elements.nextBtn.addEventListener("click", () => {
  index++;
  if (index < devinettes.length) {
    chargerDevinette();
  } else {
    afficherResultatFinal();
  }
});

elements.restartBtn.addEventListener("click", reinitialiserJeu);

// Initialisation
chargerDevinette();
