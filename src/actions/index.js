import actionTypes from './actionTypes';

export default {
    start: function start(time) {
        return {
            type: actionTypes.STARTED,
            time: time
        };
    },

    selectCell: function selectCell(id) {
        return {
            type: actionTypes.SELECT_CELL,
            id
        };
    }
};
