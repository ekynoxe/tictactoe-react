import React from 'react';
import { connect } from 'react-redux';
import { Board } from './board';

class BaseApp extends React.Component {
    render() {
        return(<div><Board board={ this.props.board } /></div>);
    }
}

function mapStateToProps(state) {
    return {
        board: state.board
    };
}

export const App = connect(mapStateToProps)(BaseApp);
