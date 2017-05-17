import states from './states';
import players from './players';

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

    if (ended) {
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

export const getAvailableCells = (board) => {
    let cells = [];

    for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
            cells.push(i);
        }
    }

    return cells;
};

export const scoreGame = (state, currentPlayer, depth) => {
    // console.log('scoreGame', state, currentPlayer);
    if (states.draw === state) {
        return 0;
    }

    if (players.o === currentPlayer) {
        return 10 - depth;
    } else {
        return -10 + depth;
    }
};

export const minimax = (game, depth) => {
    // console.log('\n-----\nminimax\n');
    let terminal = isTerminal(game.board);

    if (states.win === terminal.state || states.draw === terminal.state) {
        let score = scoreGame(terminal.state, game.currentPlayer, depth);
        // console.log('\n------------\n Terminal state', game.board, 'score', score,'\n------------\n');
        return { score };
    }

    let availableCells = getAvailableCells(game.board);
    let moves = [];

    availableCells.forEach((c) => {
        let newGame = {
            board: game.board.slice(),
            currentPlayer: (players.o === game.currentPlayer ? players.x : players.o),
            gameState: terminal.state,
            gameType: game.gameType
        };

        newGame.board[c] = newGame.currentPlayer;
        let nextScore = minimax(newGame, depth+1).score;

        moves.push({
            cell: c,
            score: nextScore
        });
    });

    moves.sort((a, b) => {
        if(players.o === game.currentPlayer) {
            if (a.score < b.score) {
                return -1;
            } else if (a.score > b.score) {
                return 1;
            }
        } else {
            if (a.score > b.score) {
                return -1;
            } else if (a.score < b.score) {
                return 1;
            }
        }

        return 0;
    });

    // console.log('\n------------\nmoves for depth', depth, moves,'\n------------\n');
    return moves[0];
};
