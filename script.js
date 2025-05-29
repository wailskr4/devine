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
   { question: "ana bntkom mouchaghba ydraa mon nom entier  ?", options: ["Ellyne lilya", "ellyne", "Ellyne lujain", "Ellyne hafida "], reponse: "Ellyne lilya" },
  { question: "quelle est le Pays préféré de ellye ?", options: ["Algérie", "Canada", "Chine", "Égypte"], reponse: "Chine" },
  { question: " Quelle seront les couleur préféré de ellye ?", options: ["rose et vert", "rose et rouge", "vert et noir ", "gris et blanc"], reponse: "rose et vert" },
{ question: " inchallah quant sera mon anniv  ?", options: ["proche de papa", "proche de maman", "unique 😎​ ", "au hazar"], reponse: "proche de papa" },
  
 { question: "Je suis une ville italienne célèbre pour mes canaux et mes gondoles. Je suis...", options: ["Rome", "Venise", "Florence", "Milan"], reponse: "Venise" },
{ question: "Je suis un monument emblématique de Paris et symbole de la France. Je suis...", options: ["L'Arc de Triomphe", "Le Louvre", "La Tour Eiffel", "Notre-Dame"], reponse: "La Tour Eiffel" },
{ question: "Je suis un pays européen connu pour le Big Ben et le thé. Je suis...", options: ["France", "Italie", "Angleterre", "Espagne"], reponse: "Angleterre" },
{ question: "Je suis une chaîne de montagnes située entre la France et l’Espagne. Je suis...", options: ["Les Alpes", "Les Pyrénées", "Les Carpates", "Les Balkans"], reponse: "Les Pyrénées" },
{ question: "Je suis une ville espagnole célèbre pour sa Sagrada Família. Je suis...", options: ["Madrid", "Séville", "Valence", "Barcelone"], reponse: "Barcelone" },


{ question: "quant  l'Inde a-t-elle obtenu son indépendance ?", options: ["1945 aout 15", "1947 aout 15", "1950 septembre 11", "1952 juin 06"], reponse: "1947 aout 15" },
{ question: "Je suis un plat indien à base de riz et d'épices, souvent accompagné de viande. Je suis...", options: ["Biryani", "Tandoori", "Dahl", "Roti"], reponse: "Biryani" },
{ question: "Je suis une boisson indienne sucrée à base de yaourt. Je suis...", options: ["Lassi", "Chai", "Masala", "Nimbu pani"], reponse: "Lassi" },
{ question: "Je suis un pain plat indien souvent servi avec des plats en sauce. Je suis...", options: ["Chapati", "Naan", "Papadam", "Paratha"], reponse: "Naan" },


  { question: "Je suis une soupe traditionnelle algérienne, servie durant le Ramadan. et nesrine me cuisinera pour wail ​❤️​", options: ["Chorba", "Hrira", "Jari", "Loubia"], reponse: "Hrira" },
{ question: "Je suis un couscous typique avec pois chiches, légumes et viande. Je suis...", options: ["Tlitli", "Chakhchoukha", "Couscous", "Trid"], reponse: "Couscous" },
{ question: "Je suis un pain farci algérien cuit à la poêle. Je suis...", options: ["Kesra", "Mhadjeb", "Khobz dar", "Galette"], reponse: "Mhadjeb" },
{ question: "Je suis un plat à base de pâte roulée et de viande hachée. Je suis...", options: ["Tlitli", "Dolma", "Rechta", "Mtewem"], reponse: "Rechta" },
{ question: "Je suis une boisson gazeuse souvent consommée dans les fast-foods. Je suis...", options: ["Sprite", "Fanta", "Coca-Cola", "Pepsi"], reponse: "Coca-Cola" },
{ question: "Je suis un snack composé de pain, viande, fromage, et légumes. Je suis...", options: ["Tacos", "Panini", "Hamburger", "Hot-dog"], reponse: "Hamburger" },
{ question: "Je suis un plat traditionnel à base de semoule, viande et sauce rouge. Wail veut me cuisiné pour 7abibto", options: ["Chakhchoukha", "Couscous", "Mtewem", "Tajine"], reponse: "Chakhchoukha" },
{ question: "Je suis une crêpe fine sucrée ou salée originaire d'Algérie. Je suis...", options: ["Baghrir", "Msemen", "Mhadjeb", "Kesra"], reponse: "Msemen" },
{ question: "Je suis un dessert algérien à base de semoule, beurre et miel. Je suis...", options: ["Makrout", "Baklava", "Zlabia", "Kalb el louz"], reponse: "Makrout" },

  { question: "Je suis une pâtisserie française et nesrine m'aime beaucoup ​❤️​", options: ["Éclair", "Madeleine", "Macaron", "Tartelette"], reponse: "Macaron" },
{ question: "Je suis une pâtisserie feuilletée garnie de crème et glacée sur le dessus. Je suis...", options: ["Mille-feuille", "Paris-Brest", "Éclair", "Opéra"], reponse: "Mille-feuille" },
{ question: "Je suis un bonbon gélifié souvent en forme d’ourson. Je suis...", options: ["Dragée", "Caramel", "Ourson", "Gomme"], reponse: "Ourson" },
{ question: "Je suis une pâtisserie moelleuse souvent servie avec du thé. Je suis...", options: ["Biscuit", "Madeleine", "Gâteau", "Financier"], reponse: "Madeleine" },
{ question: "Je suis une confiserie orientale à base de pâte d'amande et de miel. Je suis...", options: ["Nougat", "Makrout", "Zlabia", "Baklava"], reponse: "Baklava" },

{ 
  question: "Je suis son bonheur, son avenir, son futur et sa femme. Qui suis-je ? ❤️", 
  options: ["Nesrine 💋​", "❤️​​nesrine hafoudti 🥰", "Rina hafouda ​🩷​", "Bnoutie nesrine ​💚​💙​"], 
  reponse: ["Nesrine 💋​", "❤️​​nesrine hafoudti 🥰", "Rina hafouda ​🩷​", "Bnoutie nesrine ​💚​💙​"] 
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
