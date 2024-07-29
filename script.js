// background
let bg = document.querySelector("body");
bg.style.backgroundColor = "#00008b";

// header underline
let header = document.querySelector("h1");
header.style.textDecoration = "underline";
header.style.width = "100%";
header.style.margin = "10px";

// h2 text
let header2 = document.querySelector("h2");
header2.innerText = "Here are Pokemon's incredible Gen 1 starters!"

// centering h2 text
let intro_box = document.querySelector("div")
intro_box.style.display = "flex";
intro_box.style.flexDirection = "column";
intro_box.style.justifyContent = "center";
intro_box.style.alignItems = "center";

// changing bulba box text
let bulba_box = document.getElementById("bulbasaur_container")
bulba_box.style.backgroundColor = "#388e8e";

// footer text
let footer = document.querySelector("footer");
footer.innerText = "All Star Code - DOM Project"
footer.style.fontSize = "30px"
footer.style.fontStyle = "italic"
footer.style.textDecoration = "underline overline"


// changing image borders
let images = document.getElementsByTagName("img")

for (let i = 0; i < images.length; i++) {
    images[i].style.border = "5px dotted #ffcb03"
}

// cheanging the pokenom name color

let names = document.getElementsByClassName("pokemon_names")

for (let i = 0; i < names.length; i++) {
    names[i].innerText += "!"
    names[i].style.color = "#fdeea6"
}