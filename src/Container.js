'use strict';

import React from 'react';
import Radium from 'radium';
import ClearFix from './ClearFix';
import Utilties from './Utilities';

let styles = {
  gridContainer: {
    width: '100%',
    position: 'relative',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '0',
  },
}

class Container extends React.Component {
  getChildContext() {
    return {
      columns: this.props.columns || Container.defaultColumns,
    }
  }

  render() {
    return (
      <div className={Utilties.MakeClassName('container ', this.props.className)} style={styles.gridContainer}>
        {this.props.children}
        <ClearFix />
      </div>
    );
  }
}

Container.defaultColumns = 12;

Container.propTypes = {
  columns: React.PropTypes.number,
};

Container.childContextTypes = {
  columns: React.PropTypes.number.isRequired,
};

Container = Radium(Container);

export default Container;
