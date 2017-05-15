import actionTypes from './actionTypes';

export default {
    reset: () => {
        return {
            type: actionTypes.RESET
        };
    },

    selectCell: (id = null) => {
        return {
            type: actionTypes.SELECT_CELL,
            id
        };
    },

    setPlayer: (player = null) => {
        return {
            type: actionTypes.SET_PLAYER,
            player
        };
    }
};
