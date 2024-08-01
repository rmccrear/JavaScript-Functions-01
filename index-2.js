console.log("hello 2\n\n\n\n\n");

function refrain() {
    let words = "";
    words += "Jingle bells, Jingle bells\n"
    words += "Jingle all the way\n"
    words += "Oh what fun it is to ride\n"
    words += "In a one horse open sleigh\n"
    words += "Hey!\n"
    return words;
}

function song() {
    let r;
    // Verse 1
    console.log("Dashing through the snow\n");
    console.log("On a one horse open sleigh");
    console.log("o'er the fields we go.");
    console.log("laughing all the way...");

    r = refrain(); // this puts my "words" into r
    console.log(r);
    // Verse 2
    console.log("A day or two ago");
    console.log("I thought I'd take a ride");
    console.log("And soon, Miss Fanny Bright");
    console.log("Was seated by my side");
    console.log("The horse was lean and lank");
    console.log("Misfortune seemed his lot");
    console.log("He got into a drifted bank");
    console.log("And then we got upsot");

    console.log(refrain());

}

song();
