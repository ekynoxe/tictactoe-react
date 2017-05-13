import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { autoRehydrate } from 'redux-persist';
import { persistStore } from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages';

import { App } from './components/app';
import appStore from './reducers';

let store = compose(autoRehydrate())(createStore)(appStore);

class AppProvider extends React.Component {
    constructor() {
        super();

        this.state = {
            rehydrated: false
        };
    }

    componentWillMount() {
        const self = this;

        persistStore(store, {
            storage: asyncSessionStorage,
            keyPrefix: 'tictactoe'
        },
        function() {
            self.setState({ rehydrated: true });
        });
    }

    render() {
        return <App rehydrated={ this.state.rehydrated } />;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <AppProvider />
    </Provider>,
    document.getElementById('app')
);
