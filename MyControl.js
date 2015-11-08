'use strict';

import React from 'react';
import Yarg from 'react-yarg';

export default class MyControl extends React.Component {
  render() {
    return (
      <Yarg.Container>
        <Yarg.Row>
          <Yarg.Column width={6}>
            <p>This is a super awesome control</p>
          </Yarg.Column>
          <Yarg.Column width={6}>
            <p>This has 2 columns, wow! Resize your screen to watch the magic!</p>
          </Yarg.Column>
        </Yarg.Row>
      </Yarg.Container>
    )
  }
}
