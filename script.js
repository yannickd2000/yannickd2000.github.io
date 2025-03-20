const questions = [
    "Sag uns deinen letzten Crush oder trinke 2 Schlücke!",
    "Mach 10 Sekunden lang eine peinliche Tanzbewegung oder trinke 3 Schlücke!",
    "Zeige dein letztes Foto in der Galerie oder trinke 2 Schlücke!",
    "Lass jemanden eine Nachricht an eine zufällige Person aus deinem Handy schreiben oder trinke 4 Schlücke!",
    "Erzähle eine peinliche Geschichte aus deiner Kindheit oder trinke 3 Schlücke!",
    "Rufe deine Mutter an und sag ihr, dass du sie liebst, oder trinke 2 Schlücke!",
    "Lass jemanden eine beliebige Frage stellen – du musst ehrlich antworten oder 2 Schlücke trinken!",
    "Lies die letzte WhatsApp-Nachricht laut vor oder trinke 2 Schlücke!",
    "Wer war dein erster Kuss? Sag es oder trinke 2 Schlücke!",
    "Spiele Luftgitarre zu einem imaginären Song für 15 Sekunden oder trinke 2 Schlücke!",
    "Imitiere einen Mitspieler für 30 Sekunden oder trinke 2 Schlücke!",
    "Lass jemanden ein Selfie von dir machen und in eine Story posten oder trinke 4 Schlücke!",
    "Flüstere jemandem ein Kompliment ins Ohr oder trinke 1 Schluck!",
    "Sag den Namen deines letzten Dates oder trinke 3 Schlücke!",
    "Stelle dich mit einem neuen, lustigen Namen für den Rest des Spiels vor oder trinke 2 Schlücke!",
    "Singe einen beliebigen Song für 10 Sekunden oder trinke 3 Schlücke!",
    "Tanze wie ein Pinguin für 15 Sekunden oder trinke 2 Schlücke!",
    "Erzähle dein peinlichstes Party-Erlebnis oder trinke 3 Schlücke!",
    "Tausche für eine Runde ein Kleidungsstück mit jemandem oder trinke 3 Schlücke!",
    "Sprich für die nächsten 5 Minuten nur in Reimen oder trinke 3 Schlücke!",
    "Gib jemanden in der Runde einen neuen Spitznamen, der den Rest des Abends benutzt werden muss!",
    "Lass einen Mitspieler durch deine Instagram-DMs scrollen oder trinke 3 Schlücke!",
    "Lass jemanden eine Story von dir auf Instagram mit dem Text „Ich bin so betrunken!“ posten oder trinke 3 Schlücke!",
    "Zähle drei Dinge auf, die du in einer Beziehung gar nicht magst, oder trinke 3 Schlücke!",
    "Geh für den Rest des Spiels nur auf allen Vieren oder trinke 5 Schlücke!",
    "Sag der Person rechts von dir, was du am attraktivsten an ihr findest oder trinke 2 Schlücke!",
    "Lies deine letzten drei Emojis in deinem Handy laut vor und erkläre, wann du sie benutzt hast oder trinke 2 Schlücke!",
    "Tanze wie ein Roboter für 15 Sekunden oder trinke 2 Schlücke!",
    "Lass einen Mitspieler für dich einen neuen Tinder-Biosatz schreiben oder trinke 3 Schlücke!"
];

const card = document.getElementById("card");
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("nextCard");

function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

function updateCard() {
    questionElement.textContent = getRandomQuestion();
}

card.addEventListener("click", updateCard);
nextButton.addEventListener("click", updateCard);
