
/*Plans:
    - Mechanism to lock one color or colors and change the other
    - Lock and Unlock SVG
    - Save Palette and email to self
    - Make website prettier (Better Navbar)
    - Mechanism to copy hex code 
    - Mechanism to enter your own hex code
        - Textbox needs a mechanism that turns the background color into a light one automatically
    - Buy me a kofi window
    - 

*/
let colorNum = 3;
let hexCode;
let hex;
let hexLetters = "0123456789ABCDEF";
const colors = ["color-one", "color-two", "color-three", "color-four"];
let comp;
let white = "#FFFFFF"

function newHex() {
    hexCode = "#";    
    // Loop code from GeeksForGeeks
    for (let i = 0; i < 6; i++)
        hexCode += hexLetters[(Math.floor(Math.random() * 16))];

    return(hexCode);   
}

function hexToRgb(h) {
    return['0x'+h[1]+h[2]|0,'0x'+h[3]+h[4]|0,'0x'+h[5]+h[6]|0]
}

function rgbToHex(r,g,b) {
    return"#"+((1<<24)+(r<<16)+(g<<8)+ b).toString(16).slice(1);
}

function avgHex(h1,h2) {
    a=hexToRgb(h1);
    b=hexToRgb(h2); 
    
    return rgbToHex(~~((a[0]+b[0])/2),~~((a[1]+b[1])/2),~~((a[2]+b[2])/2));
}

function newPalette() {
    hex = newHex();
    document.getElementById("color-one").style.backgroundColor = hex;
    document.getElementById("color-one-input").value = hex;
    document.getElementById("color-one-input").style.backgroundColor = hex;
}

var form = document.getElementById("myForm");

function manualChange(event) {
    let input;
    input = "#123123";
    document.getElementById("#color-one-input").value = "hello"
    document.getElementById("color-one").style.backgroundColor = input;
    document.getElementById("color-one-input").value = input;
    event.preventDefault();
}

form.addEventListener('Enter', manualChange);


function addColor() {
    console.log("color added");
}

function delColor() {
    console.log("color deleted");


}

