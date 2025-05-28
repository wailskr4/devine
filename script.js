
const themeChanger = document.getElementById("theme-toggle");
themeChanger.addEventListener("click", function() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  html.setAttribute("data-theme", newTheme);
  
  // Optional: Save the theme preference to localStorage
  localStorage.setItem("theme", newTheme);
});

// Optional: Check for saved theme preference on page load
document.addEventListener("DOMContentLoaded", function() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
});

const devinettes = [
  // 5 devinettes sur les pays
  {
    question: "Quel pays est surnommé le pays du Soleil-Levant ?",
    options: ["Chine", "Corée du Sud", "Japon", "Vietnam"],
    reponse: "Japon"
  },
  {
    question: "Dans quel pays se trouve la ville de Marrakech ?",
    options: ["Algérie", "Tunisie", "Maroc", "Égypte"],
    reponse: "Maroc"
  },
  {
    question: "Quel pays est célèbre pour sa Tour Eiffel ?",
    options: ["Belgique", "France", "Italie", "Espagne"],
    reponse: "France"
  },
  {
    question: "Quel pays a pour capitale Ottawa ?",
    options: ["États-Unis", "Canada", "Australie", "Nouvelle-Zélande"],
    reponse: "Canada"
  },
  {
    question: "Dans quel pays se trouve le désert du Sahara ?",
    options: ["Afrique du Sud", "Maroc", "Algérie", "Kenya"],
    reponse: "Algérie"
  },
  {
    question: "Je suis un pays d’Amérique du Sud connu pour le football, le carnaval et la forêt amazonienne. Je suis…",
    options: ["Colombie", "Brésil", "Chili", "Argentine"],
    reponse: "Brésil"
  },
  {
    question: "Je suis une nation insulaire d’Asie du Sud-Est, célèbre pour mes plages et mes volcans. Je suis…",
    options: ["Indonésie", "Philippines", "Thaïlande", "Malaisie"],
    reponse: "Indonésie"
  },
  // 5 devinettes sur les fast-foods
  {
    question: "Je suis une boisson gazeuse très populaire souvent servie avec un menu fast-food. Je suis…",
    options: ["Jus d’orange", "Thé glacé", "Coca-Cola", "Eau"],
    reponse: "Coca-Cola"
  },
  {
    question: "Je suis un sandwich rond, souvent garni de viande, de fromage et de salade. On me trouve dans presque tous les fast-foods. Je suis…",
    options: ["Pizza", "Hot-dog", "Hamburger", "Wrap"],
    reponse: "Hamburger"
  },
  {
    question: "Je suis une galette de maïs mexicaine garnie de viande, légumes et sauce piquante. Je suis…",
    options: ["Burrito", "Tacos", "Quesadilla", "Nachos"],
    reponse: "Tacos"
  },
  {
    question: "Je suis un plat italien fait de pâte, de sauce tomate et de fromage fondu. Je suis…",
    options: ["Risotto", "Spaghetti", "Pizza", "Lasagnes"],
    reponse: "Pizza"
  },


  // 5 devinettes sur les plats traditionnels
  {
    question: "Quel plat italien est fait de couches de pâtes, de viande et de béchamel ?",
    options: ["Pizza", "Risotto", "Lasagnes", "Spaghetti Carbonara"],
    reponse: "Lasagnes"
  },
  {
    question: "Quel plat traditionnel japonais est fait de riz vinaigré et de poisson cru ?",
    options: ["Ramen", "Sushi", "Tempura", "Miso Soup"],
    reponse: "Sushi"
  },
  {
    question: "Quel plat mexicain est une tortilla garnie de viande, haricots et fromage ?",
    options: ["Taco", "Burrito", "Quesadilla", "Enchilada"],
    reponse: "Burrito"
  },
  {
    question: "Quel plat français est une crêpe salée à base de sarrasin ?",
    options: ["Crêpe", "Galette", "Quiche", "Croque-monsieur"],
    reponse: "Galette"
  },
  {
    question: "Quel plat algérien est un couscous aux légumes et viande ?",
    options: ["Tajine", "Chorba", "Couscous", "Merguez"],
    reponse: "Couscous"
  },
	  {
    question: "Je suis une forteresse médiévale édifiée au XIIIᵉ siècle par les Mérinides, perchée sur une colline au sud de Tlemcen. Qui suis-je ?",
    options: ["Palais El Mechouar", "Mansourah", "Citadelle de Nedroma", "Kasbah des Andalouses"],
    reponse: "Mansourah"
  },
  {
    question: "Je suis un site naturel emblématique de Tlemcen avec une cascade de 27m de haut, surnommé 'la mariée voilée'. Je m'appelle...",
    options: ["Les grottes de Beni Add", "Le canyon de Sidi Boumediene", "Les chutes d'El-Ourit", "Le lac de Dayet El-Ferd"],
    reponse: "Les chutes d'El-Ourit"
  },
  {
    question: "Je suis un plat traditionnel tlemcenien à base de semoule fine, de poulet et d'oignons caramélisés, souvent servi lors des fêtes familiales. Je suis...",
    options: ["La chorba beida", "Le mtewem", "La rechta", "Le trid"],
    reponse: "Le mtewem"
  },
	  {
    question: "Je suis ca personne préféré , sont bonheur et sont Avenir sont moi la vie de wail est vide",
    options: ["Nesrine", "l'internet", "sa famille", "une voiture"],
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
