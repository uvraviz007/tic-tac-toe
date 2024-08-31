let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let turn0 = "true";

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (
            boxes[a].innerText !== "" &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            return boxes[a].innerText; // Returns "X" or "O"
        }
    }
    return null; // No winner
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === "true") {
            box.innerText = "X";
            turn0 = "false";
        } else {
            box.innerText = "O";
            turn0 = "true";
        }
        box.disabled = true;

        let winner = checkWinner();
        if (winner) {
            alert(winner + " wins!");
            boxes.forEach((box) => box.disabled = true); // Disable all boxes
        } else if (Array.from(boxes).every(box => box.innerText !== "")) {
            alert("It's a draw!");
        }

        console.log("box was clicked");
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = "true";
    console.log("Game reset");
});
