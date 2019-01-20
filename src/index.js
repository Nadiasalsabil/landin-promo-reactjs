import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Promo from './Promo';

import * as serviceWorker from './serviceWorker';

const items = ['Promo'];

ReactDOM.render(
    <App items={items}/>,
    document.getElementById("root")
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
