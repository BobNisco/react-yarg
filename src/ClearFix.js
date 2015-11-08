'use strict';

import React from 'react';

let styles = {
  clearFix: {
    clear: 'both',
  },
};

export default class ClearFix extends React.Component {
  render() {
    return (
      <div style={styles.clearFix}></div>
    )
  }
}
