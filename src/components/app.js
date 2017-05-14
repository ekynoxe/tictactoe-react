import React from 'react';
import { connect } from 'react-redux';
import { Board } from './board';
import actions from '../actions';

class BaseApp extends React.Component {
    reset() {
        this.props.dispatch(actions.reset());
    }

    render() {
        if (!this.props.rehydrated) {
            return <div>Loading...</div>;
        }

        let notice;

        if (this.props.gameEnded) {
            notice = 'Game over (declare winner here...)';

        } else {
            notice = `Current player: ${ this.props.currentPlayer.toUpperCase() }`;
        }

        return(<div>
            <Board board={ this.props.board } />
            <p className='notice'>{ notice }</p>
            <button onClick={ this.reset.bind(this) }>Restart</button>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        board: state.board,
        currentPlayer: state.currentPlayer,
        gameEnded: state.gameEnded
    };
}

export const App = connect(mapStateToProps)(BaseApp);
