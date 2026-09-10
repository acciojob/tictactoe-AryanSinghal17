//your JS code here. If required.
let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");
let subBtn = document.getElementById("submit");

let setupBtn = document.getElementById("setup");
let gameBtn = document.getElementById("game");

let message = document.querySelector(".message");
const cells = document.querySelectorAll(".board div");

subBtn.addEventListener("click" , ()=>{
console.log(player1.value);
console.log(player2.value);

setupBtn.hidden = true;
gameBtn.hidden = false;

message.textContent = player1.value + ",you're up";
}) 

let currentPlayer = "X";
let gameOver = false;

cells.forEach((item) => {

    item.addEventListener("click", () => {
      
      if (gameOver) return;
      if(item.textContent !== "") return;

    item.textContent = currentPlayer;

      checkWinner();
      if (gameOver) return;
      
    if(currentPlayer === "X"){
      currentPlayer = "O";
      message.textContent = player2.value + ",you're up";
    }else{
      currentPlayer = "X";
      message.textContent = player1.value + ",you're up";
    }
    });
});


function checkWinner() {

    const wins = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"]
    ];

    for (let combo of wins) {

        let a = document.getElementById(combo[0]).textContent;
        let b = document.getElementById(combo[1]).textContent;
        let c = document.getElementById(combo[2]).textContent;

        if (a !== "" && a === b && b === c) {

            gameOver = true;

            if (a === "X") {
                message.textContent =
                    player1.value + " congratulations you won!";
            } else {
                message.textContent =
                    player2.value + " congratulations you won!";
            }

            return;
        }
    }
}