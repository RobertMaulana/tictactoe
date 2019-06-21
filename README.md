## REQUIREMENTS

- Browser (chrome, firefox, safari etc.)

## HOW TO OPEN GAME

- Click index.html and it will automatically open your browser

## HOW TO PLAY

- Choose the board size first by inputting a number between 3-10 and press the OK button.
- Two player game. Players choose either to be a player o or player x. Player o starts first.
- Click on the grid and put your marker down where you want.
- Players alternate in turns.
- To win, get your markers in a row, either vertical, horizontal or diagonal.
- Scores will be added onto the score board at the end of each game. To play another game click on the "Play Again" button.
- If you want to reset the scores, click on the "Reset scores" button.
- If you want to reset both scores and board (reset game), click on the "Reset game" button.


## LOGIC

- Structured in a table in a HTML document.
- If a cell is clicked on, a marker is placed into the table cell (by adding an image to the table cell) depending on which player's turn it is.
- The cell will also be given a "clicked" class so that it cannot be clicked on more than once
- To find out who won, pass through the ID names of the cells to see if there are any winning combinations. If a combination was found, then a winner will be called.
- To reset the board, all classes are removed from the table cells and the values of the global variables are reset.
