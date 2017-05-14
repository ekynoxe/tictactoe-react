import actionTypes from './actionTypes';

export default {
    reset: function reset() {
        return {
            type: actionTypes.RESET
        };
    },

    selectCell: function selectCell(id) {
        return {
            type: actionTypes.SELECT_CELL,
            id
        };
    }
};
