import React from 'react';
import { connect } from 'react-redux';
import { Board } from './board';
import actions from '../actions';
import players from '../players';
import states from '../states';

class BaseApp extends React.Component {
    reset() {
        this.props.dispatch(actions.reset());
    }

    setPlayer(player) {
        this.props.dispatch(actions.setPlayer(player));
    }

    componentWillUpdate(nextProps) {
        // On first load or reset, no player will be selected, so we randomly
        //  select a player to start the game here.
        if (!nextProps.currentPlayer) {
            this.setPlayer(Math.round(Math.random()) === 0 ? players.o : players.x);
        }
    }

    render() {
        // Waiting for application to load the local store
        if (!this.props.rehydrated) {
            return <div>Loading...</div>;
        }

        let notice;

        if (states.inplay !== this.props.gameState) {
            notice = 'Game over (declare winner here...)';

        } else if (this.props.currentPlayer) {
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
        gameState: state.gameState
    };
}

export const App = connect(mapStateToProps)(BaseApp);
