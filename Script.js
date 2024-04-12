let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; //player 0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       console.log("box is clicked");
    //    box.innerText = "hii";

    if(turn){
        box.innerText = "o";
        turn = false;
    }else{
        box.innerText = "X";
        turn = true;
    }
    box.disabled = true; //this will fix the value so we cant change it again and again
    
    checkWinner();
   });
});

const checkWinner = () =>{

    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner");
                showWinner(pos1Val);
            }
        }
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}; 


const disableBoxes = () =>{
      for(let box of boxes){
        box.disabled = true;
      }
};

const enableBoxes = () =>{
    for(let box of boxes){
      box.disabled = false;
      box.innerText= "";
    }
};

const resetGame = () =>{
   turn = true;
   msgContainer.classList.add("hide");
   enableBoxes();
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)