let boxes = document.querySelectorAll(".clip");
let newgame = document.querySelector(".btn");
let reset = document.querySelector(".btnn");
let messege = document.querySelector(".msg-con");
let ms = document.querySelector("#msg");

let turnO = true; // if turnO ===true 'O' and turnO ===false 'X'

let count = 0;  //to check the draw match

let winsArr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnO = true;
  count = 0;
  enabledbtn();
  messege.classList.add("hide");
};

boxes.forEach((clip) => {
  clip.addEventListener("click", () => {
    console.log("box is clicked");
    if (turnO === true) {
      clip.innerText = "O";
      turnO = false;
      clip.style.color = "red";
    } else {
      clip.innerText = "X";
      turnO = true;
      clip.style.color = "blue";
    }
    clip.disabled = true;
    count++;
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      showDraw();
    }
  });
});

const showDraw = () => {
  ms.innerText = `Draw Match 🙅`;
  messege.classList.remove("hide");
  disabledbtn();
};

const disabledbtn = () => {
  let clip;
  for (clip of boxes) {
    clip.disabled = true;
  }
};

const enabledbtn = () => {
  let clip;
  for (clip of boxes) {
    clip.disabled = false;
    clip.innerText = "";
  }
};

const showWinner = (winner) => {
  ms.innerText = `Congratulation Winner is ${winner}🏆🥇🎉`;
  messege.classList.remove("hide");
  disabledbtn();
};

const checkWinner = () => {
  let pattern;
  for (pattern of winsArr) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    console.log(pos1, pos2, pos3);

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
