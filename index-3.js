// console.log("hello world 3")

function jingle() {
    return "Jingle bells, jingle bells";
}
function ride() {
    return "Oh, what fun it is to ride";
}

function horseSleigh() {
    return "In a one-horse open sleigh";
}

function way() {
    return "Jingle all the way";
} 

function refrain() {
    let words = "";
    words += `Oh! ${jingle()}`;
    words += `${way()}\n`;
    words += `${ride()}\n`;
    words += `${horseSleigh()}, hey\n`;
    words += `${jingle()}\n`;
    words += `${way()}\n`;
    words += `${ride()}\n`;
    words += `${horseSleigh()}\n`;
    return words;
}

function song() {
    console.log("Dashing through the snow");
    console.log("In a one-horse open sleigh");
    console.log("O'er the fields we go");
    console.log("Making spirits bright");
    console.log("What fun it is to ride and sing");
    console.log("A sleighing song tonight");
    console.log("");
    let r = refrain();
    console.log(r);
    console.log("A day or two ago");
    console.log("I thought I'd take a ride");
    console.log("And soon, Miss Fanny Bright");
    console.log("Was seated by my side");
    console.log("The horse was lean and lank");
    console.log("Misfortune seemed his lot");
    console.log("He got into a drifted bank");
    console.log("And then we got upsot");
}

song();
