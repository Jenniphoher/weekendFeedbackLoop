import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';``
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

const feelingData = (state=[], action) => {
    if (action.type === 'FEELING') {
        return action.payload;
    } 

    return state;
}

const understandingData = (state=[], action) => {
    if (action.type === 'UNDERSTANDING') {
        return action.payload;
    }

    return state;
}

const supportData = (state=[], action) => {
    if (action.type === 'SUPPORT') {
        return action.payload;
    }

    return state;
}

const commentsData = (state=[], action) => {
    if (action.type === 'COMMENTS') {
        return action.payload;
    }

    return state;
}

const store = createStore(
    combineReducers({
        feelingData,
        understandingData,
        supportData,
        commentsData
    }),
    applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
