import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './Media/medium.css';
import './Media/small.css';
import './Media/extrasmall.css';
import 'react-notifications/lib/notifications.css';
/* eslint-disable */
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
