/* global process, describe, it, expect */
'use strict';

import '../common';

import states from '../../src/states';
import players from '../../src/players';
import {
    isTerminal,
    availableCells
} from '../../src/game';
import {
    initialBoard,
    inPlayBoard,
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

    describe('The availableCells method', () => {
        it('should return an array of empty cells for the current board', () => {
            expect( availableCells(initialBoard) ).to.deep.equal([0,1,2,3,4,5,6,7,8]);
            expect( availableCells(inPlayBoard) ).to.deep.equal([0,2,5,8]);
            expect( availableCells(drawBoard) ).to.deep.equal([]);
            expect( availableCells(oWinBoardRow) ).to.deep.equal([]);
        });
    });
});
