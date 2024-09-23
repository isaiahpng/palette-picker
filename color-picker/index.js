
/*Plans:
    - Mechanism to lock one color or colors and change the other
    - Buy me a kofi window
    - Light and Dark Mode
*/

let hexCode;
let hex;
let hexLetters = "0123456789ABCDEF";
const colors = ["color-one", "color-two", "color-three", "color-four", "color-five"];


/* Function to generate a new random hex code */
function newHex() {
    hexCode = "#";    
    // Loop code from GeeksForGeeks
    for (let i = 0; i < 6; i++)
        hexCode += hexLetters[(Math.floor(Math.random() * 16))];

    return(hexCode);   
}

/*Generates a new palette everytime the spacebar is pressed  */
document.addEventListener("keydown", (event) => {
    for (i=0; i<5; i++){
        if(event.key === " "){
            hex = newHex();
            document.getElementById(colors[i]).style.backgroundColor = hex;
            document.getElementById(colors[i] + "-input").value = hex;
            document.getElementById(colors[i] + "-input").style.backgroundColor = hex;
        }
    }
})

/*Allows the color to be manually entered by the user */
const inputColOne = document.getElementById("color-one-input");
    inputColOne.addEventListener("input", (event) => {
        let input = inputColOne.value;
        document.getElementById("color-one").style.backgroundColor = input;
        document.getElementById("color-one-input").style.backgroundColor = input;          
    });

const inputColTwo = document.getElementById("color-two-input");
    inputColTwo.addEventListener("input", (event) => {
        let input = inputColTwo.value;
        document.getElementById("color-two").style.backgroundColor = input;
        document.getElementById("color-two-input").style.backgroundColor = input;     
    });

const inputColThree = document.getElementById("color-three-input");
    inputColThree.addEventListener("input", (event) => {
        let input = inputColThree.value;
        document.getElementById("color-three").style.backgroundColor = input;
        document.getElementById("color-three-input").style.backgroundColor = input;     
    });

const inputColFour = document.getElementById("color-four-input");
    inputColFour.addEventListener("input", (event) => {
        let input = inputColFour.value;
        document.getElementById("color-four").style.backgroundColor = input;
        document.getElementById("color-four-input").style.backgroundColor = input;     
    });

const inputColFive = document.getElementById("color-five-input");
    inputColFive.addEventListener("input", (event) => {
        let input = inputColFive.value;
        document.getElementById("color-five").style.backgroundColor = input;
        document.getElementById("color-five-input").style.backgroundColor = input;     
    });
