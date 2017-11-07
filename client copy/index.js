import React from 'react';
import { render } from 'react-dom';

/*** React Componenets ***/
import App from './components/App.jsx'

/*** Style ***/

//This is used remove default styling by browser
import reset from './style/reset.scss';
//This is the actual style for the content
import style from './style/style.scss';

render(<App />, document.getElementById('root'));
