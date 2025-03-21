const questions = [
    { text: "Sag uns deinen letzten Crush oder trinke 2 Schlücke!", type: "peinlich" },
    { text: "Zeige dein letztes Foto in der Galerie oder trinke 2 Schlücke!", type: "peinlich" },
    { text: "Schicke eine Sprachnachricht mit einem Liebesgeständnis an eine zufällige Person oder trinke 4 Schlücke!", type: "extrem" },
    { text: "Tausche ein Kleidungsstück mit jemandem oder trinke 3 Schlücke!", type: "mutprobe" },
    { text: "Mach 10 Sekunden lang eine peinliche Tanzbewegung oder trinke 3 Schlücke!", type: "mutprobe" },
    { text: "Lass einen Mitspieler durch deine Instagram-DMs scrollen oder trinke 3 Schlücke!", type: "peinlich" },
    { text: "Rufe deine Mutter an und sag ihr, dass du betrunken bist, oder trinke 5 Schlücke!", type: "extrem" },
    { text: "Flüstere jemandem eine peinliche Wahrheit ins Ohr oder trinke 2 Schlücke!", type: "peinlich" },
    { text: "Gib einem Mitspieler einen Kuss auf die Wange oder trinke 3 Schlücke!", type: "mutprobe" },
    { text: "Stelle dich in die Mitte und tanze wie ein Pinguin für 20 Sekunden oder trinke 3 Schlücke!", type: "mutprobe" }
];

const colors = {
    peinlich: "#ff4d4d",
    mutprobe: "#ffcc00",
    extrem: "#8a2be2"
};

const sounds = {
    flip: new Audio("flip.mp3"),
    extreme: new Audio("extreme.mp3")
};

let availableQuestions = [...questions]; // Kopie der Fragenliste

const card = document.getElementById("card");
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("nextCard");
const resetButton = document.getElementById("resetGame");

function getRandomQuestion() {
    if (availableQuestions.length === 0) {
        questionElement.textContent = "Alle Fragen wurden gespielt! Drücke 'Reset', um neu zu starten!";
        card.style.background = "#444";
        return null;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions.splice(randomIndex, 1)[0]; // Entferne die gewählte Frage aus der Liste
}

function updateCard() {
    let randomQuestion = getRandomQuestion();
    if (!randomQuestion) return;

    questionElement.textContent = randomQuestion.text;
    card.style.background = colors[randomQuestion.type];

    if (randomQuestion.type === "extrem") {
        sounds.extreme.play();
    } else {
        sounds.flip.play();
    }
}

function resetGame() {
    availableQuestions = [...questions]; // Fragenliste zurücksetzen
    questionElement.textContent = "Tippe auf die Karte, um zu starten!";
    card.style.background = "white";
}

card.addEventListener("click", updateCard);
nextButton.addEventListener("click", updateCard);
resetButton.addEventListener("click", resetGame);
