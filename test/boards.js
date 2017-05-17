import players from '../src/players';
const x = players.x;
const o = players.o;

/*
 . . .
 . . .
 . . .
*/
export const initialBoard = [null,null,null,null,null,null,null,null,null];
/*
 . x .
 x o .
 o x .
*/
export const inPlayBoard = [null,x,null,x,o,null,o,x,null];
/*
 x o o
 o x x
 o x o
*/
export const drawBoard = [x,o,o,o,x,x,o,x,o];
/*
 o o o
 o x x
 x x o
*/
export const oWinBoardRow = [o,o,o,o,x,x,x,x,o];
/*
 o x o
 o x x
 o o x
*/
export const oWinBoardColumn = [o,x,o,o,x,x,o,o,x];
/*
 o x o
 x o x
 x o o
*/
export const oWinBoardDiagonal = [o,x,o,x,o,x,x,o,o];
/*
 o x o
 x x x
 x o o
*/
export const xWinBoardRow = [o,x,o,x,x,x,x,o,o];
/*
 o x o
 o x x
 x x o
*/
export const xWinBoardColumn = [o,x,o,o,x,x,x,x,o];
/*
 o x x
 o x x
 x o o
*/
export const xWinBoardDiagonal = [o,x,x,o,x,x,x,o,o];
