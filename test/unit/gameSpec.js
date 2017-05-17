/* global process, describe, it, expect */
'use strict';

import '../common';

import states from '../../src/states';
import players from '../../src/players';
import types from '../../src/types';
import {
    isTerminal,
    getAvailableCells,
    minimax
} from '../../src/game';
import {
    initialBoard,
    inPlayBoard,
    lastInPlayBoard,
    drawBoard,
    oWinBoardRow,
    oWinBoardColumn,
    oWinBoardDiagonal,
    xWinBoardRow,
    xWinBoardColumn,
    xWinBoardDiagonal
} from '../boards';

const x = players.x;
const o = players.o;

describe('The game', () => {
    describe('The isTerminal method', () => {
        it('should identify an inPlay board', () => {
            let result;
            result = isTerminal(initialBoard);

            expect( result.state ).to.equal(states.inplay);
            expect( result.winner ).to.not.be.defined;

            result = isTerminal(inPlayBoard);
            expect( result.state ).to.equal(states.inplay);
            expect( result.winner ).to.not.be.defined;
        });

        it('should identify a draw board', () => {
            let result = isTerminal(drawBoard);
            expect( result.state ).to.equal(states.draw);
            expect( result.winner ).to.not.be.defined;
        });

        it('should identify o winning', () => {
            let result;

            result = isTerminal(oWinBoardRow);
            expect( result.state ).to.equal(states.win);
            expect( result.winner ).to.equal(o);

            result = isTerminal(oWinBoardColumn);
            expect( result.state ).to.equal(states.win);
            expect( result.winner ).to.equal(o);

            result = isTerminal(oWinBoardDiagonal);
            expect( result.state ).to.equal(states.win);
            expect( result.winner ).to.equal(o);
        });

        it('should identify x winning', () => {
            let result;

            result = isTerminal(xWinBoardRow);
            expect( result.state ).to.equal(states.win);
            expect( result.winner ).to.equal(x);

            result = isTerminal(xWinBoardColumn);
            expect( result.state ).to.equal(states.win);
            expect( result.winner ).to.equal(x);

            result = isTerminal(xWinBoardDiagonal);
            expect( result.state ).to.equal(states.win);
            expect( result.winner ).to.equal(x);
        });
    });

    describe('The getAvailableCells method', () => {
        it('should return an array of empty cells for the current board', () => {
            expect( getAvailableCells(initialBoard) ).to.deep.equal([0,1,2,3,4,5,6,7,8]);
            expect( getAvailableCells(inPlayBoard) ).to.deep.equal([6,7,8]);
            expect( getAvailableCells(drawBoard) ).to.deep.equal([]);
            expect( getAvailableCells(oWinBoardRow) ).to.deep.equal([]);
        });
    });

    describe('The minimax method', () => {
        it('should return 0 for the initial board with o as next player', () => {
            let gameState = {
                board: initialBoard,
                currentPlayer: x, // <-- "this player was the last to play to reach the board above"
                gameState: states.inplay,
                gameType: types.singlePlayer
            };

            expect( minimax(gameState, 0) ).to.equal(0);
        });//.timeout(120000); // timeout is necessary if turning on console logging.

        it('should return 9 for the inPlayBoard board [x,o,x,o,o,x,null,null,null] with o as next player', () => {
            let gameState = {
                board: inPlayBoard,
                currentPlayer: x, // <-- "this player was the last to play to reach the board above"
                gameState: states.inplay,
                gameType: types.singlePlayer
            };

            expect( minimax(gameState, 0) ).to.equal(9);
        });

        it('should return -9 for the inPlayBoard board [x,o,x,o,o,x,null,null,null] with x as next player', () => {
            let gameState = {
                board: inPlayBoard,
                currentPlayer: o, // <-- "this player was the last to play to reach the board above"
                gameState: states.inplay,
                gameType: types.singlePlayer
            };

            expect( minimax(gameState, 0) ).to.equal(-9);
        });

        it('should return 9 for the lastInPlayBoard board [x,o,x,o,o,x,x,null,o] with o as next player where it can only win', () => {
            let gameState = {
                board: lastInPlayBoard,
                currentPlayer: x, // <-- "this player was the last to play to reach the board above"
                gameState: states.inplay,
                gameType: types.singlePlayer
            };

            expect( minimax(gameState, 0) ).to.equal(9);
        });

        it('should return 0 for the lastInPlayBoard board [x,o,x,o,o,x,x,null,o] with x as next player where only a draw is possible', () => {
            let gameState = {
                board: lastInPlayBoard,
                currentPlayer: o, // <-- "this player was the last to play to reach the board above"
                gameState: states.inplay,
                gameType: types.singlePlayer
            };

            expect( minimax(gameState, 0) ).to.equal(0);
        });

        it('should return 10 for the winning boards for o', () => {
            let gameState = {
                board: oWinBoardRow,
                currentPlayer: o, // <-- "this player was the last to play to reach the board above"
                gameState: states.inplay,
                gameType: types.singlePlayer
            };

            expect( minimax(gameState, 0) ).to.equal(10);

            gameState.board = oWinBoardColumn;
            expect( minimax(gameState, 0) ).to.equal(10);

            gameState.board = oWinBoardDiagonal;
            expect( minimax(gameState, 0) ).to.equal(10);
        });

        it('should return -10 for the winning boards for x', () => {
            let gameState = {
                board: xWinBoardRow,
                currentPlayer: x, // <-- "this player was the last to play to reach the board above"
                gameState: states.inplay,
                gameType: types.singlePlayer
            };

            expect( minimax(gameState, 0) ).to.equal(-10);

            gameState.board = xWinBoardColumn;
            expect( minimax(gameState, 0) ).to.equal(-10);

            gameState.board = xWinBoardDiagonal;
            expect( minimax(gameState, 0) ).to.equal(-10);
        });
    });
});
