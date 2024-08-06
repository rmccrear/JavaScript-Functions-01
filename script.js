
function refrain() {
    let words = "";
    words += "Hey, jingle bells, jingle bells\n";
    words += "Jingle all the way\n";
    words += "Oh, what fun it is to ride\n";
    words += "In a one-horse open sleigh, hey\n";
    words += "Jingle bells, jingle bells\n";
    words += "Jingle all the way\n";
    words += "Oh, what fun it is to ride\n";
    words += "In a one-horse open sleigh\n";
    return words;
}

function song() {
    let allWords = "";
    allWords += "Dashing through the snow\n";
    allWords += "In a one-horse open sleigh\n";
    allWords += "O'er the fields we go\n";
    allWords += "Laughing all the way\n";
    allWords += "Bells on bobtails ring\n";
    allWords += "Making spirits bright\n";
    allWords += "What fun it is to ride and sing\n";
    allWords += "A sleighing song tonight\n\n";

    allWords += refrain();

    allWords += "A day or two ago\n";
    allWords += "I thought I'd take a ride\n";
    allWords += "And soon, Miss Fanny Bright\n";
    allWords += "Was seated by my side\n";
    allWords += "The horse was lean and lank\n";
    allWords += "Misfortune seemed his lot\n";
    allWords += "And then we got upsot\n";
    allWords += "\n";

    allWords += refrain();
    return r;
}

let tag = document.getElementById("jingle-bells");

// Create the event handler
function handleClick() {
    let songLyrics;
    songLyrics = song();
    tag.innerHTML = songLyrics;
}

let button = document.getElementById("song-maker-button");
// button.onclick = handleClick;
button.addEventListener("click", handleClick);
