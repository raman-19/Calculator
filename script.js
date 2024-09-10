// //calculater

const display = document.getElementById("display");
function appendDisplay(input){
display.value += input;
}
function clearDisplay(){
    display.value = "";

}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

}


// Calculator

// const display = document.getElementById("display");

// function appendDisplay(input) {
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calculate() {
//     try {
//         const result = eval(display.value);
//         if (isNaN(result)) {
//             throw new Error("Invalid calculation");
//         }
//         display.value = result;
//     } catch (error) {
//         display.value = "Error";
//         console.error(error); // Log the error for debugging
//     }
// }
