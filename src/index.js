import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import store from './store/store';

import { Puff } from 'react-loader-spinner';

import App from './App';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store.configStore}>
            <PersistGate
                loading={
                    <Puff type="Puff" color="#00BFFF" height={80} width={80} />
                }
                persistor={store.persistor}
            >
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
