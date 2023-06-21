// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//My Solution:


const rps = (p1, p2) => {
    if (p1 === "scissors" && p2 === "scissors"||p1 === "rock" && p2 === "rock"||p1 === "paper" && p2 === "paper") {
      return "Draw!"
    } else if (p1 === "scissors" && p2 === "paper"||p1 === "rock" && p2 === "scissors"||p1 === "paper" && p2 === "rock") {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
};
  
//Expected Output: Player 1 won!
console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));

//Expected Output: Player 2 won!
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'paper'));

//Expected Output: Draw!
console.log(rps('rock', 'rock'));
console.log(rps('scissors', 'scissors'));
console.log(rps('paper', 'paper'));