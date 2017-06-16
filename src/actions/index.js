import actionTypes from './actionTypes';

export default {
    reset: () => {
        return {
            type: actionTypes.RESET
        };
    },

    resetGame: () => {
        return {
            type: actionTypes.RESET_GAME
        };
    },

    selectCell: (id = null) => {
        return {
            type: actionTypes.SELECT_CELL,
            id
        };
    },

    selectGame: (gameType = null) => {
        return {
            type: actionTypes.SELECT_GAME,
            gameType
        };
    },

    setPlayer: (player = null) => {
        return {
            type: actionTypes.SET_PLAYER,
            player
        };
    }
};
