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
    { text: "Stelle dich in die Mitte und tanze wie ein Pinguin für 20 Sekunden oder trinke 3 Schlücke!", type: "mutprobe" },
    { text: "Hattest du schon mal einen Crush auf jemanden in diesem Raum? Oder trinke 2 Schlücke!", type: "peinlich" },
    { text: "Sag den Namen von zwei Personen, die du am ehesten daten würdest oder trinke 3 Schlücke!", type: "peinlich" },
    { text: "Rufe jemanden aus deiner Kontaktliste an und tu so, als wärst du verliebt in ihn/sie!", type: "extrem" },
    { text: "Schicke eine Sprachnachricht mit einem Liebesgeständnis an eine zufällige Person oder trinke 4 Schlücke!", type: "extrem" },
    { text: "Gib einem Mitspieler einen Kuss auf die Wange oder trinke 3 Schlücke!", type: "mutprobe" },
    { text: "Mache ein Kompliment an die Person links von dir oder trinke 2 Schlücke!", type: "mutprobe" },
    { text: "Was ist dein peinlichster Spitzname? Oder trinke 3 Schlücke!", type: "peinlich" },
    { text: "Schicke einer deiner Lehrer eine Nachricht mit 'Ich vermisse Sie' oder trinke 4 Schlücke!", type: "extrem" },
    { text: "Ziehe eine Socke aus und benutze sie als Handschuh für 5 Minuten oder trinke 2 Schlücke!", type: "mutprobe" },
    { text: "Was ist der schlimmste Chatverlauf, den du jemals hattest? Zeig ihn oder trinke 3 Schlücke!", type: "peinlich" },
    { text: "Was ist das unangenehmste Geheimnis, das du noch nie erzählt hast? Oder trinke 4 Schlücke!", type: "peinlich" },
    { text: "Zeige deinen letzten Google-Suchverlauf oder trinke 3 Schlücke!", type: "peinlich" },
    { text: "Rieche an den Schuhen der Person links von dir oder trinke 2 Schlücke!", type: "mutprobe" },
    { text: "Hattest du jemals Gefühle für eine Lehrperson?", type: "peinlich" },
    { text: "Sag uns das peinlichste, was dir in der Öffentlichkeit passiert ist!", type: "peinlich" },
    { text: "Sag den Namen der Person hier, die du am wenigsten magst!", type: "peinlich" },
    { text: "Tausche dein Oberteil mit jemandem für die nächste Runde!", type: "extrem" },
    { text: "Setze dich auf den Schoß der Person rechts von dir für 2 Minuten!", type: "mutprobe" },
    { text: "Hast du jemals etwas aus einem Supermarkt mitgehen lassen?", type: "peinlich" },
    { text: "Lass einen Mitspieler deine Frisur für die nächste Runde ändern!", type: "mutprobe" },
    { text: "Jeder der im selben Monat wie du Geburtstag hat Trinkt.", type: "trinken" },
    { text: "Wasserfall: Jedert trinkt sein Glass leer.", type: "extrem" },
    { text: "Jeder der älter als du ist, trinkt 1 Schluck.", type: "trinken" },
    { text: "Jeder mit einem Android-Phone trinkt.", type: "trinken" },
    { text: "Alle Jungs trinken einen Schluck.", type: "trinken" },
    { text: "Alle Mädchen trinken einen Schluck.", type: "trinken" },
    { text: "Du trinks einen Schluck!", type: "trinken" },
    { text: "Gestehe: Wie oft in der Woche/Monat schaust du Pornos.", type: "peinlich" },
    { text: "Die Person nach dir muss ein Bier exen.", type: "extrem" },
    { text: "Wähle jemanden aus, der sein Getränk exen muss.", type: "extrem" },
    { text: "Jeder der Jeans trägt, trink einen Schluck.", type: "trinken" },
    { text: "Die Person vor dir muss einen Schluck trinken.", type: "trinken" },
    { text: "Jeder mit einem Iphone trinkt einen Schluck.", type: "trinken" },
    { text: "Refill: Jeder füllt seinen Drink wieder voll.", type: "trinken" },
    { text: "Jeder der Single ist Trink 2 Schlücke.", type: "trinken" },
    { text: "Jeder mit einem I im Namen trinkt.", type: "trinken" },
    { text: "Jeder der noch in Kontakt mit seiner/seinem Ex ist, trinkt 2 Schlücke.", type: "trinken" },
    { text: "Die Person vor dir kann dir eine Beliebige frage stellen, du kannst entweder ehrlich Antworten oder 5 Schlücke trinken.", type: "extrem" },
    { text: "Trinke einen Schluck für jede Person die Single ist.", type: "trinken" },
    { text: "Trinke 2 Schlücke, wenn du jemals gesagt hast, Ich trinke nie wieder.", type: "trinken" },
    { text: "Wenn du in der letzten Woche Pornos geschaut hast, Trinke 2 Schlücke.", type: "peinlich" },
    { text: "Die Person mit dem kürzesten Nachnamen trinkt 2 Schlücke.", type: "trinken" },
    { text: "Du musst die Farbe der Unterwäsche der Person 3 auf deiner rechten Seite, wenn du sie erräts muss die Person 2 Schlücke trinken, wenn nicht musst du.", type: "peinlich" },
    { text: "Jeder der mal einen Ginger geküsst hat, trinkt einen Schluck.", type: "trinken" },
    { text: "Die Person die Zuletzt das WC benutzt hat trinkt einen Schluck.", type: "trinken" },
    { text: "Die Person mit dem Längsten Vornamen trinkt einen Schluck.", type: "trinken" },
    { text: "Die Person drei rechts von dir, kann dir irgend eine Aufgabe stellen, du musst sie entweder machen oder 5 Schlücke trinken.", type: "extrem" },
    { text: "Sag etwas was du noch nie gemacht hast, wenn jemand anderes das schon mal gemacht muss die Person einen Schluck trinken.", type: "trinken" },
    { text: "Wurdest du schon mal beim Mastrubieren erwischt/gestört.", type: "peinlich" },
];

const colors = {
    peinlich: "#ff4d4d",
    mutprobe: "#ffcc00",
    extrem: "#8a2be2",
    trinken: "#008000"
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
const filters = document.querySelectorAll(".filter");

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
    filterQuestions();
    questionElement.textContent = "Tippe auf die Karte, um zu starten!";
    card.style.background = "white";
}

function filterQuestions() {
    const selectedTypes = Array.from(filters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);

    availableQuestions = questions.filter(q => selectedTypes.includes(q.type));
}

filters.forEach(filter => {
    filter.addEventListener("change", () => {
        filterQuestions();
        resetGame();
    });
});

card.addEventListener("click", updateCard);
nextButton.addEventListener("click", updateCard);
resetButton.addEventListener("click", resetGame);

resetGame(); // Initialisieren mit gefilterten Fragen
