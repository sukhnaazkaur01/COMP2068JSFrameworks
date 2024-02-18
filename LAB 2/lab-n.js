const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get user's selection
function getUserSelection(callback) {
    rl.question("Let's play a game! Choose ROCK, PAPER, or SCISSORS: ", function(userInput) {
        if (isValidSelection(userInput)) {
            console.log("Your selection is", userInput.toUpperCase());
            callback(userInput.toUpperCase());
        } else {
            console.log("Invalid choice. Please enter ROCK, PAPER, or SCISSORS.");
            getUserSelection(callback);
        }
    });
}

// Function to check if the user's selection is valid
function isValidSelection(selection) {
    const validSelections = ['ROCK', 'PAPER', 'SCISSORS'];
    return validSelections.includes(selection.toUpperCase());
}

// Function to generate computer's selection
function getComputerSelection() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return 'User wins';
    } else {
        return 'Computer wins';
    }
}

// Function to play the game
function playGame() {
    // User choice
    getUserSelection(function(userSelection) {
        // Computer choice
        const computerSelection = getComputerSelection();

        // Display both selections
        console.log('User Selection:', userSelection);
        console.log('Computer Selection:', computerSelection);

        // Determine the winner and display the outcome
        const result = determineWinner(userSelection, computerSelection);
        console.log('Results:', result);

        // Ask if the user wants to play again
        rl.question(result === 'User wins' ? 'Congratulations! You won! Ready for another round? (yes/no): ' : 
                     result === "It's a tie" ? "It's a tie! Ready for another round? (yes/no): " :
                     'Computer wins! Ready for another round? (yes/no): ', function(playAgainResult) {
            if (playAgainResult.trim().toLowerCase() === 'yes') {
                // Play again
                playGame();
            } else {
                // End the game
                console.log('Bye! It was nice playing with you.');
                rl.close();
            }
        });
    });
}

// Start game
playGame();
