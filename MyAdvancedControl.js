'use strict';

import React from 'react';
import Yarg from 'react-yarg';

export default class MyAdvancedControl extends React.Component {
  render() {
    return (
      <Yarg.Container columns={100}>
        <Yarg.Row>
          <Yarg.Column width={50} smallWidth={25} mediumWidth={25}>
            <p>This is a more advanced grid container. It has 100 columns! This column is 50 columns wide normally, but 25 columns wide in small/medium screens. Resize your browser to see!</p>
          </Yarg.Column>
          <Yarg.Column width={50} smallWidth={75} mediumWidth={75}>
            <p>This is the second column, it also has 50 columns normally. But in small/medium screens we expliclitly set it to be 75 columns large! Math!</p>
          </Yarg.Column>
        </Yarg.Row>
      </Yarg.Container>
    )
  }
}
