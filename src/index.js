import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // allows us to make progressive web apps, we don't use this service worker until we need to
