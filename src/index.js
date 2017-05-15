import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import localForage from 'localForage';

import { App } from './components/app';
import reducer from './reducers';

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(),
    autoRehydrate()
  )
);

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
            storage: localForage,
            keyPrefix: 'tictactoe_'
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
