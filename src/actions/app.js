import actionTypes from './actionTypes';

export default {
    start: function start(time) {
        return {
            type: actionTypes.APP.STARTED,
            time: time
        };
    }
};
