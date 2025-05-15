const devinettes = [
  {
    question: "Je suis de couleur rouge, j’attire les yeux et le désir, celui qui me mange réclame ma saveur.",
    options: ["Pomme", "Pastèque", "Fruit de bois", "Foie"],
    reponse: "Pomme"
  },
  {
    question: "Je suis verte à l’extérieur et rouge à l’intérieur, on me mange en été pour me rafraîchir.",
    options: ["Kiwi", "Pastèque", "Fraise", "Concombre"],
    reponse: "Pastèque"
  },
  {
    question: "Je suis une glande en forme de papillon, située dans le cou, et je contrôle le métabolisme. Qui suis-je ?",
    options: ["Le pancréas", "La thyroïde", "L'hypophyse", "Les surrénales"],
    reponse: "La thyroïde"
  },
  {
    question: "Je suis la plus grande artère du corps humain, chargée de transporter le sang oxygéné. Qui suis-je ?",
    options: ["La veine cave", "L'artère pulmonaire", "L'aorte", "L'artère coronaire"],
    reponse: "L'aorte"
  },

  // Questions sur les pays
  {
    question: "Je suis un pays connu pour mes pyramides, le Nil et mes pharaons. Qui suis-je ?",
    options: ["Le Maroc", "L'Égypte", "La Grèce", "Le Mexique"],
    reponse: "L'Égypte"
  },
  {
    question: "Je suis le plus grand pays du monde en superficie, situé en partie en Europe et en Asie. Qui suis-je ?",
    options: ["La Chine", "Les États-Unis", "Le Canada", "La Russie"],
    reponse: "La Russie"
  },
  {
    question: "Je suis Toujours avec toi et je disparai a la nuit",
    options: ["soleil", "ombre", "clé", "etoile"],
    reponse: "ombre"
  },
  {
    question: "Je suis petit et souvent rouge ou noir, je pousse dans les bois et suis très sucré.",
    options: ["Raisin", "Mûre", "Fruit de bois", "Cerise"],
    reponse: "Fruit de bois"
  },
  {
    question: "Je roule sur des rails, je peux être très rapide, je relie les villes et parfois les pays.",
    options: ["Avion", "Bus", "Train", "Voiture"],
    reponse: "Train"
  },
  {
    question: "Je vole dans le ciel, je transporte les gens très loin, parfois à travers des continents.",
    options: ["Hélicoptère", "Avion", "Montgolfière", "Fusée"],
    reponse: "Avion"
  },
  {
    question: "On me tire pour voyager, j’ai des roues, je porte tes valises.",
    options: ["Chariot", "Trolley", "Valise à roulettes", "Sac à dos"],
    reponse: "Valise à roulettes"
  },
  {
    question: "Je donne l'heure, je suis souvent au poignet, parfois connecté.",
    options: ["Téléphone", "Réveil", "Horloge", "Montre"],
    reponse: "Montre"
  },
  {
    question: "Je suis utile en cas de pluie, je m'ouvre en rond au-dessus de ta tête.",
    options: ["Cape", "Parapluie", "Chapeau", "Bâche"],
    reponse: "Parapluie"
  },
  {
    question: "Je flotte sur l'eau, je transporte des gens ou des marchandises sur les mers.",
    options: ["Bateau", "Canot", "Sous-marin", "Jet-ski"],
    reponse: "Bateau"
  },
  {
    question: "Je suis adorable, gentille, aimable et mon homme m'adore.",
    options: ["Nesrine", "Chocolat", "Macaron", "Pizza"],
    reponse: "Nesrine"
  },


  {
    question: "Je capte les sons, je suis dans tes oreilles pour écouter la musique.",
    options: ["Enceinte", "Casque", "Télécommande", "Micro"],
    reponse: "Casque"
  },
  {
    question: "Je suis une spécialité culinaire typique de Tlemcen, une pâtisserie fine au miel et aux amandes. Qui suis-je ?",
    options: ["La Baklawa", "La Chrik", "La Zlabia", "Les Makroud"],
    reponse: "La Chrik"
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
