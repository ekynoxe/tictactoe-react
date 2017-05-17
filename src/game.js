import states from './states';

export const isTerminal = (board) => {
    let i, j;
    let ended = -1 === board.indexOf(null);

    //check rows
    for(i = 0; i <= 6; i = i + 3) {
        if(board[i] && board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
            return {
                state: states.win,
                winner: board[i]
            };
        }
    }

    //check columns
    for(i = 0; i <= 2 ; i++) {
        if(board[i] && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
            return {
                state: states.win,
                winner: board[i]
            };
        }
    }

    //check diagonals
    for(i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
        if(board[i] && board[i] === board[i + j] && board[i + j] === board[i + 2*j]) {
            return {
                state: states.win,
                winner: board[i]
            };
        }
    }

    if(ended) {
        //the game is draw
        return {
            state: states.draw
        };

    } else {
        return {
            state: states.inplay
        };
    }
};

export const availableCells = (board) => {
    let cells = [];

    for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
            cells.push(i);
        }
    }
    
    return cells;
};
