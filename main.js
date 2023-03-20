// Created by Chris Tomaskovic
// JavaScript for the main page and form interaction

// Global variables
var chessboard = document.getElementById('chessboard');

// For loop that creates the chessboard
// Loops through the rows and columns and creates a div for each square on the board 
// and adds the class 'chess-square' to each div changing the background color of each square every other square
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        var chessSquare = document.createElement('div');
        chessSquare.className = 'chess-square';
        if ((i + j) % 2 == 0) {
            chessSquare.style.backgroundColor = 'black';
        }
        chessboard.appendChild(chessSquare);
    }
}