'use strict';

import React from 'react';
import Yarg from 'react-yarg';
import ReactDOM from 'react-dom';
import MyControl from './MyControl';
import MyAdvancedControl from './MyAdvancedControl';

ReactDOM.render((
  <div>
    <MyControl></MyControl>
    <MyAdvancedControl></MyAdvancedControl>
  </div>
), document.getElementById('main'))
