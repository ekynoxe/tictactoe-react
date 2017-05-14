import React from 'react';
import { connect } from 'react-redux';
import { Board } from './board';

class BaseApp extends React.Component {
    render() {
        let notice = `Current player: ${ this.props.currentPlayer.toUpperCase() }`;

        return(<div>
            <Board board={ this.props.board } />
            <p className='notice'>{ notice }</p>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        board: state.board,
        currentPlayer: state.currentPlayer
    };
}

export const App = connect(mapStateToProps)(BaseApp);
