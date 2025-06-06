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
  { question: "Je suis un pays européen connu pour le Big Ben et le thé. Je suis...", options: ["France", "Italie", "Angleterre", "Espagne"], reponse: "Angleterre" },
  { question: "Je suis une ville italienne célèbre pour ses canaux et ses gondoles. Je suis...", options: ["Rome", "Venise", "Naples", "Milan"], reponse: "Venise" },
  { question: "La Tour Eiffel se trouve dans quelle ville ?", options: ["Madrid", "Londres", "Paris", "Berlin"], reponse: "Paris" },
  { question: "Je suis un petit pays européen célèbre pour ses chocolats et sa capitale Bruxelles. Je suis...", options: ["Belgique", "Pays-Bas", "Suisse", "Autriche"], reponse: "Belgique" },
  { question: "La Sagrada Familia est un monument emblématique situé à...", options: ["Lisbonne", "Barcelone", "Milan", "Athènes"], reponse: "Barcelone" },
  { question: "Je suis une île au sud de l’Italie, célèbre pour l’Etna. Je suis...", options: ["Sardaigne", "Crète", "Sicile", "Corse"], reponse: "Sicile" },

  // 🌏 Asie
  { question: "Je suis un pays asiatique connu pour le Mont Fuji et les sushis. Je suis...", options: ["Chine", "Corée", "Vietnam", "Japon"], reponse: "Japon" },
  { question: "Le Taj Mahal se trouve dans quel pays ?", options: ["Pakistan", "Inde", "Bangladesh", "Sri Lanka"], reponse: "Inde" },
  { question: "Je suis une ville futuriste des Émirats Arabes Unis, célèbre pour la tour Burj Khalifa. Je suis...", options: ["Abu Dhabi", "Doha", "Dubaï", "Mascate"], reponse: "Dubaï" },
  { question: "Quel pays est surnommé « Le pays du matin calme » ?", options: ["Thaïlande", "Corée du Sud", "Japon", "Malaisie"], reponse: "Corée du Sud" },
  { question: "Angkor Wat est un site historique situé au...", options: ["Vietnam", "Laos", "Cambodge", "Myanmar"], reponse: "Cambodge" },
  { question: "Je suis un pays d’Asie célèbre pour ses plages et son pad thaï. Je suis...", options: ["Philippines", "Thaïlande", "Malaisie", "Indonésie"], reponse: "Thaïlande" },

  // 🌍 Afrique (surtout Algérie)
  { question: "Je suis une ville algérienne surnommée la perle de l'ouest. Je suis...", options: ["Tlemcen", "Annaba", "Oran", "Sétif"], reponse: "Tlemcen" },
  { question: "Quel monument historique célèbre peut-on visiter à Tipasa ?", options: ["Ruines romaines", "Fort turc", "Mosquée Ottomane", "Tombe phénicienne"], reponse: "Ruines romaines" },
  { question: "Je suis une spécialité culinaire algérienne à base de semoule. Je suis...", options: ["Couscous", "Chakchouka", "Dolma", "Tajine"], reponse: "Couscous" },
  { question: "Le désert du Sahara couvre une grande partie de quel pays ?", options: ["Tunisie", "Égypte", "Algérie", "Mali"], reponse: "Algérie" },
  { question: "Je suis la capitale de l’Algérie. Je suis...", options: ["Alger", "Constantine", "Oran", "Batna"], reponse: "Alger" },
  { question: "Je suis un pays africain célèbre pour les pyramides. Je suis...", options: ["Maroc", "Soudan", "Égypte", "Éthiopie"], reponse: "Égypte" },

  // 🍛 Nourriture algérienne
  { question: "Quel plat algérien est souvent servi lors des mariages et préparé avec des légumes, pois chiches et viande ?", options: ["Chorba", "Rechta", "Couscous", "Tajine"], reponse: "Couscous" },
  { question: "Je suis une soupe traditionnelle consommée pendant le Ramadan. Je suis...", options: ["Harira", "Chorba", "Loubia", "Hrira"], reponse: "Chorba" },
  { question: "Quel plat est typique de Constantine, fait de pâtes fines roulées à la main appelées \"trid\" ?", options: ["Rechta", "Mtewem", "Chakhchoukha", "Makroud"], reponse: "Chakhchoukha" },

  // 🍰 Pâtisserie française
  { question: "Je suis une pâtisserie française composée de coques colorées et d’une ganache au centre. Je suis...", options: ["Éclair", "Macaron", "Opéra", "Financier"], reponse: "Macaron" },
  { question: "Je suis un dessert en forme de cylindre, garni de crème pâtissière, souvent parfumé au café ou au chocolat. Je suis...", options: ["Religieuse", "Éclair", "Paris-Brest", "Tartelette"], reponse: "Éclair" },
  { question: "Quel gâteau en forme de couronne est garni de crème pralinée et nommé d’après une célèbre course cycliste ?", options: ["Saint-Honoré", "Paris-Brest", "Forêt-Noire", "Tropézienne"], reponse: "Paris-Brest" },

  // 🍣 Plats japonais
  { question: "Je suis un plat japonais à base de riz vinaigré et de poisson cru. Je suis...", options: ["Tempura", "Sushi", "Ramen", "Yakitori"], reponse: "Sushi" },
  { question: "Quel plat japonais est une soupe à base de nouilles dans un bouillon ?", options: ["Ramen", "Soba", "Udon", "Miso"], reponse: "Ramen" },
  { question: "Je suis un plat japonais composé de légumes ou fruits de mer frits dans une pâte légère. Je suis...", options: ["Katsu", "Tempura", "Onigiri", "Teriyaki"], reponse: "Tempura" },

{ 
  question: "combien d'enfant aura t'on inchallah ❤️", 
  options: ["2 Garçons👦", "❤️Deux fille 🥰", "1 une fille et 1 garçon", "2 fille 2 garçon "], 
  reponse: "❤️Deux fille 🥰"
}
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
