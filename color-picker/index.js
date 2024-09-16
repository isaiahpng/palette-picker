
/*Plans:
    - Mechanism to lock one color or colors and change the other
    - Save Palette and email to self
    - Make website prettier (Better Navbar)
    - Mechanism to copy hex code 
    - Mechanism to enter your own hex code
        - Textbox needs a mechanism that turns the background color into a light one automatically
    - Buy me a kofi window

*/
let hexCode;
let hex;
let hexLetters = "0123456789ABCDEF";
const colors = ["color-one", "color-two", "color-three", "color-four"];

function newHex() {
    hexCode = "#";    
    // Loop code from GeeksForGeeks
    for (let i = 0; i < 6; i++)
        hexCode += hexLetters[(Math.floor(Math.random() * 16))];

    return(hexCode);   
}

function newPalette() {
    for (let i = 0; i < 4; i++) {
        hex = newHex();
        document.getElementById(colors[i]).innerText = hex;
        document.getElementById(colors[i]).style.backgroundColor = hex;
    }
}