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
    },
    
    start: function start(time) {
        return {
            type: actionTypes.STARTED,
            time: time
        };
    }
};
