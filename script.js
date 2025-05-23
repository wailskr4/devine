const devinettes = [
  // Tlemcen & Constantine (Algérie)
  {
    question: "Je suis une ville algérienne connue pour ses palais andalous et la mosquée Sidi Boumediene. Je suis…",
    options: ["Oran", "Tlemcen", "Annaba", "Béjaïa"],
    reponse: "Tlemcen"
  },
  {
    question: "On m’appelle la ville des ponts suspendus. Je suis perchée sur des falaises. Qui suis-je ?",
    options: ["Tizi Ouzou", "Alger", "Constantine", "Sétif"],
    reponse: "Constantine"
  },
  {
    question: "Je suis une spécialité culinaire sucrée typique de Tlemcen à base d’amandes et de miel. Je suis…",
    options: ["Makroud", "Kalb el louz", "Zlabia", "Griouech"],
    reponse: "Griouech"
  },
  {
    question: "Ce pont emblématique de Constantine est suspendu à plus de 100 mètres de hauteur. Il s'appelle…",
    options: ["Pont de Sidi M’Cid", "Pont de l’unité africaine", "Pont des Martyrs", "Pont El-Kantara"],
    reponse: "Pont de Sidi M’Cid"
  },
  {
    question: "À Tlemcen, ce parc naturel est célèbre pour ses grottes et cascades. Il s'agit du parc de…",
    options: ["Chréa", "Tassili", "Tlemcen", "Gouraya"],
    reponse: "Tlemcen"
  },

  // Thèmes de voyage (monde)
  {
    question: "Quel monument emblématique trouve-t-on à Paris ?",
    options: ["Big Ben", "Taj Mahal", "Tour Eiffel", "Statue de la Liberté"],
    reponse: "Tour Eiffel"
  },
  {
    question: "Dans quel pays peut-on visiter les pyramides de Gizeh ?",
    options: ["Maroc", "Grèce", "Égypte", "Turquie"],
    reponse: "Égypte"
  },
  {
    question: "Quel pays est célèbre pour ses cerisiers en fleurs et ses temples zen ?",
    options: ["Chine", "Corée", "Japon", "Thaïlande"],
    reponse: "Japon"
  },
  {
    question: "Quelle île tropicale est célèbre pour ses plages et son volcan actif, le Piton de la Fournaise ?",
    options: ["Madagascar", "Réunion", "Tahiti", "Maldives"],
    reponse: "Réunion"
  },
  {
    question: "Dans quelle ville italienne peut-on faire un tour en gondole sur les canaux ?",
    options: ["Rome", "Milan", "Venise", "Naples"],
    reponse: "Venise"
  },
  {
    question: "Quel pays est surnommé le pays des mille collines ?",
    options: ["Burundi", "Rwanda", "Éthiopie", "Kenya"],
    reponse: "Rwanda"
  },
  {
    question: "Quel pays d’Amérique du Sud est connu pour le Machu Picchu ?",
    options: ["Brésil", "Argentine", "Pérou", "Chili"],
    reponse: "Pérou"
  },
  {
    question: "Quel désert célèbre se trouve en Afrique et est le plus vaste du monde ?",
    options: ["Kalahari", "Atacama", "Gobi", "Sahara"],
    reponse: "Sahara"
  },
  {
    question: "Quel pays est reconnu pour ses fjords et ses aurores boréales ?",
    options: ["Finlande", "Islande", "Suède", "Norvège"],
    reponse: "Norvège"
  },
  {
    question: "Dans quel pays trouve-t-on le Taj Mahal ?",
    options: ["Pakistan", "Inde", "Bangladesh", "Iran"],
    reponse: "Inde"
  },
  {
    question: "Quel pays est connu pour ses kangourous et ses koalas ?",
    options: ["Australie", "Nouvelle-Zélande", "Afrique du Sud", "Brésil"],
    reponse: "Australie"
  },
  {
    question: "Quel est le plus grand pays du monde en superficie ?",
    options: ["Chine", "États-Unis", "Russie", "Canada"],
    reponse: "Russie"
  },
  {
    question: "Dans quel pays trouve-t-on la ville de Marrakech ?",
    options: ["Tunisie", "Égypte", "Algérie", "Maroc"],
    reponse: "Maroc"
  },
  {
    question: "Quel pays est célèbre pour ses tulipes et ses moulins à vent ?",
    options: ["Belgique", "Pays-Bas", "Suisse", "Allemagne"],
    reponse: "Pays-Bas"
  },
  {
    question: "Quel archipel est réputé pour ses plages paradisiaques et se situe dans l'océan Indien ?",
    options: ["Cap-Vert", "Seychelles", "Canaries", "Philippines"],
    reponse: "Seychelles"
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
  if (score >= 14) {
    messageFinal = "Ma femme est une intellecte machallah";
  } else if (score >=9) {
    messageFinal = "Pas mal bébé chaatra t3 papaha";
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
