import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

ReactDOM.render(<BadgeNew/>, container);




// ReactDOM.render(<Badge 
//   avatar = 'https://mcuexchange.com/wp-content/uploads/2018/06/thor.jpg'
//   firstName = 'Chris'
//   lastName = 'Meza'
//   jobTitle = 'AI Engineer'
//   twitter = 'chriszdeux'
// />, container);

