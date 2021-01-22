import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// store.subscribe(()=>
//     console.info('STATE: ',store.getState())
// )


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
