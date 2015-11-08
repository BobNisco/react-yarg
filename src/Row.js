'use strict';

import React from 'react';
import Utilities from './Utilities';
import ClearFix from './ClearFix';

let styles = {
  row: {
    width: '100%',
  },
};

export default class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={Utilities.MakeClassName('row ', this.props.className)} style={styles.row}>
        {this.props.children}
        <ClearFix />
      </div>
    )
  }
}
