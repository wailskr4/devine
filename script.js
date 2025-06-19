// Theme Toggle Functionality
const themeChanger = document.getElementById("theme-toggle");
themeChanger.addEventListener("click", function() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

document.addEventListener("DOMContentLoaded", function() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
});

// Quiz Game Data
const devinettes = [
  // 🌍 Europe
  { question: "Je suis un pays européen célèbre pour le flamenco et la paella. Je suis...", options: ["Portugal", "Espagne", "Grèce", "Italie"], reponse: "Espagne" },
  { question: "Je suis une ville allemande connue pour le mur qui me divisait. Je suis...", options: ["Munich", "Hambourg", "Berlin", "Cologne"], reponse: "Berlin" },
  { question: "Le Colisée se trouve dans quelle ville ?", options: ["Florence", "Venise", "Naples", "Rome"], reponse: "Rome" },
  { question: "Je suis un pays européen célèbre pour mes fjords et ma capitale Oslo. Je suis...", options: ["Suède", "Norvège", "Finlande", "Danemark"], reponse: "Norvège" },
  { question: "L'Acropole est un monument emblématique situé à...", options: ["Istanbul", "Athènes", "Rome", "Lisbonne"], reponse: "Athènes" },
  { question: "Je suis une île grecque célèbre pour mes maisons blanches et bleues. Je suis...", options: ["Crète", "Rhodes", "Mykonos", "Santorin"], reponse: "Santorin" },

  // 🌏 Asie
  { question: "Je suis un pays asiatique connu pour la Grande Muraille. Je suis...", options: ["Mongolie", "Chine", "Tibet", "Corée"], reponse: "Chine" },
  { question: "Les temples d'Angkor se trouvent dans quel pays ?", options: ["Vietnam", "Cambodge", "Laos", "Myanmar"], reponse: "Cambodge" },
  { question: "Je suis une cité-État asiatique célèbre pour mon lion et mes gratte-ciels. Je suis...", options: ["Hong Kong", "Singapour", "Macao", "Kuala Lumpur"], reponse: "Singapour" },
  { question: "Quel pays est appelé « Le pays du sourire » ?", options: ["Vietnam", "Thaïlande", "Cambodge", "Laos"], reponse: "Thaïlande" },
  { question: "Le temple Borobudur est un site historique situé en...", options: ["Malaisie", "Indonésie", "Brunei", "Philippines"], reponse: "Indonésie" },
  { question: "Je suis un pays d'Asie célèbre pour mes cerisiers en fleurs et mes geishas. Je suis...", options: ["Corée du Sud", "Japon", "Taiwan", "Chine"], reponse: "Japon" },

  // 🌍 Afrique (surtout Algérie)
  { question: "Je suis une ville algérienne surnommée la ville des ponts. Je suis...", options: ["Alger", "Constantine", "Oran", "Annaba"], reponse: "Constantine" },
  { question: "Quel site historique peut-on visiter dans les Aurès algériens ?", options: ["Djemila", "Timgad", "Gouraya", "Tassili"], reponse: "Timgad" },
  { question: "Je suis une spécialité algérienne à base de pâte feuilletée et de miel. Je suis...", options: ["Baklawa", "Makroud", "Zlabia", "Charak"], reponse: "Baklawa" },
  { question: "Les montagnes de l'Atlas traversent principalement quel pays du Maghreb ?", options: ["Tunisie", "Libye", "Maroc", "Algérie"], reponse: "Algérie" },
  { question: "Je suis le port principal de l'Algérie sur la Méditerranée. Je suis...", options: ["Annaba", "Skikda", "Oran", "Alger"], reponse: "Alger" },
  { question: "Je suis un pays africain célèbre pour le Sphinx et le Nil. Je suis...", options: ["Soudan", "Égypte", "Éthiopie", "Libye"], reponse: "Égypte" },

  // 🍛 Nourriture algérienne
  { question: "Quel plat algérien est fait de galettes de pain trempées dans une sauce épicée ?", options: ["Chakchouka", "Rechta", "Chakhchoukha", "Doubara"], reponse: "Chakhchoukha" },
  { question: "Je suis un plat algérien à base de haricots blancs en sauce. Je suis...", options: ["Foul", "Loubia", "Adas", "Jelbana"], reponse: "Loubia" },
  { question: "Quel gâteau algérien est fait de semoule, dattes et miel ?", options: ["Makroud", "Baklawa", "Dziriettes", "Cornes de gazelle"], reponse: "Makroud" },

  // 🍰 Pâtisserie française
  { question: "Je suis une pâtisserie française feuilletée en forme de palmier. Je suis...", options: ["Palmier", "Chausson", "Feuilleté", "Croissant"], reponse: "Palmier" },
  { question: "Je suis un dessert français à base de crème brûlée au caramel sur le dessus. Je suis...", options: ["Flan", "Crème brûlée", "Île flottante", "Bavarois"], reponse: "Crème brûlée" },


  // 🍣 Plats japonais
  { question: "Je suis un plat japonais de riz en boule enveloppé d'algue nori. Je suis...", options: ["Maki", "Onigiri", "Chirashi", "Inari"], reponse: "Onigiri" },
  { question: "Quel plat japonais consiste en une omelette roulée sucrée ?", options: ["Tamagoyaki", "Okonomiyaki", "Takoyaki", "Oyakodon"], reponse: "Tamagoyaki" },
  { question: "Je suis un plat japonais de nouilles sautées avec des légumes. Je suis...", options: ["Yakisoba", "Soba", "Udon", "Somen"], reponse: "Yakisoba" },

  // 🏥 Médical (nouveau thème)
  { question: "Je suis l'organe qui pompe le sang dans tout le corps. Je suis...", options: ["Poumon", "Foie", "Cœur", "Rein"], reponse: "Cœur" },
  { question: "Combien d'os compte le squelette d'un adulte ?", options: ["186", "206", "226", "246"], reponse: "206" },
  { question: "Je suis la vitamine produite par la peau sous l'effet du soleil. Je suis la vitamine...", options: ["A", "B", "C", "D"], reponse: "D" },
  { question: "Quel organe filtre le sang et produit l'urine ?", options: ["Foie", "Rate", "Rein", "Pancréas"], reponse: "Rein" }
];

// Game State
let index = 0;
let score = 0;

// DOM Elements
const elements = {
  riddle: document.getElementById("riddle"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  nextBtn: document.getElementById("next"),
  progressBar: document.getElementById("progress-bar"),
  scoreEl: document.getElementById("score"),
  restartBtn: document.getElementById("restart"),
  finalScore: document.getElementById("final-score"),
  finalMessage: document.getElementById("final-message"),
  scoreValue: document.getElementById("score-value"),
  indiceBtn: document.getElementById("hint") // 🔸 nouveau bouton indice
};

// Charger une devinette
function chargerDevinette() {
  elements.feedback.textContent = "";
  elements.nextBtn.style.display = "none";
  elements.nextBtn.disabled = true;
  elements.options.innerHTML = "";
  elements.scoreEl.classList.add("hidden");
  elements.restartBtn.classList.add("hidden");
  elements.finalScore.textContent = "";
  elements.finalMessage.textContent = "";
  elements.indiceBtn.disabled = false; // 🔸 activer indice

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

// Vérifier la réponse
function verifierReponse(reponseChoisie) {
  const bonneReponse = devinettes[index].reponse;

  const estCorrect = Array.isArray(bonneReponse)
    ? bonneReponse.includes(reponseChoisie)
    : reponseChoisie === bonneReponse;

  const tousBoutons = document.querySelectorAll(".option-btn");

  // Désactiver les boutons et indiquer les bonnes/mauvaises réponses
  tousBoutons.forEach(btn => {
    btn.disabled = true;

    if (
      (Array.isArray(bonneReponse) && bonneReponse.includes(btn.textContent)) ||
      btn.textContent === bonneReponse
    ) {
      btn.classList.add("correct");
    } else if (btn.textContent === reponseChoisie && !estCorrect) {
      btn.classList.add("incorrect");
    }
  });

  if (estCorrect) {
    elements.feedback.textContent = "Bonne réponse !";
    elements.feedback.classList.add("correct-text");
    score++;
    updateScoreDisplay();
  } else {
    elements.feedback.textContent = `Faux ! La bonne réponse était : ${
      Array.isArray(bonneReponse) ? bonneReponse[0] : bonneReponse
    }`;
    elements.feedback.classList.add("incorrect-text");
  }

  elements.nextBtn.style.display = "inline-block";
  elements.nextBtn.disabled = false;
}

// Afficher l’indice (supprimer 2 mauvaises réponses)
let indiceUtilisations = 0; // 🔸 compteur global des indices utilisés

function afficherIndice() {
  if (indiceUtilisations >= 3) {
    elements.feedback.textContent = "C'est bon omri tu a utilisé tout les indice 😁";
    elements.feedback.classList.remove("correct-text", "incorrect-text");
    elements.indiceBtn.disabled = true;
    return;
  }

  const reponseCorrecte = devinettes[index].reponse;
  const boutons = Array.from(document.querySelectorAll(".option-btn"));
  const mauvaisesReponses = boutons.filter(btn => btn.textContent !== reponseCorrecte);
  const mauvaisesAEnlever = mauvaisesReponses.sort(() => 0.5 - Math.random()).slice(0, 2);
  mauvaisesAEnlever.forEach(btn => btn.style.visibility = "hidden");

  elements.feedback.textContent = `Indice : Deux mauvaises réponses ont été supprimées 3iniya bonne chance a nous 🫂​ (${indiceUtilisations + 1}/3)`;
  elements.feedback.classList.remove("correct-text", "incorrect-text");

  elements.indiceBtn.disabled = true;
  indiceUtilisations++; // 🔸 incrémentation
}


// Score
function updateScoreDisplay() {
  elements.scoreValue.textContent = score;
}

// Résultat final
function afficherResultatFinal() {
  elements.riddle.textContent = "Bravo, tu as terminé toutes les devinettes !";
  elements.options.innerHTML = "";
  elements.feedback.textContent = "";
  elements.nextBtn.style.display = "none";
  elements.progressBar.style.width = "100%";

  let messageFinal = "";
  if (score >= 14) {
    messageFinal = "Ma femme est une intellecte machallah";
  } else if (score >= 9) {
    messageFinal = "Pas mal bébé chaatra t3 papaha";
  } else {
    messageFinal = "Encore un effort zine jss tu peux faire mieux";
  }

  elements.finalScore.innerHTML = `
    Tu as obtenu <strong>${score}</strong> bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""} 
    sur <strong>${devinettes.length}</strong>.
  `;
  elements.finalMessage.textContent = messageFinal;

  elements.scoreEl.classList.remove("hidden");
  elements.restartBtn.classList.remove("hidden");
}

// Redémarrer
function reinitialiserJeu() {
  index = 0;
  score = 0;
  updateScoreDisplay();
  chargerDevinette();
}

// Events
elements.nextBtn.addEventListener("click", () => {
  index++;
  if (index < devinettes.length) {
    chargerDevinette();
  } else {
    afficherResultatFinal();
  }
});

elements.restartBtn.addEventListener("click", reinitialiserJeu);
elements.indiceBtn.addEventListener("click", afficherIndice);

// Lancer le jeu
chargerDevinette();
