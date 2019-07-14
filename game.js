// CACHE the VARIABLES for EFFICIENCY
// STORING for FUTURE USE
// 
let userScore = 0;
let computerScore = 0;
// DEFINE the VARIABLES for the CHANGING SCORES - DOM ELEMENTS 
// "_SPAN" is used to REFERENCE the TAG 
// 
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
// PICK the CLASS where the CHANGES are being MADE
// 
const Scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
// REFERENCE the IMAGES
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");