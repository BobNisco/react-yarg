'use strict';

import React from 'react';
import Radium from 'radium';
import Utilities from './Utilities';

let styles = {
  columnMixin: (columnCount, props) => {
    return Object.assign({
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: '1px',
      float: 'left',
      marginLeft: ((props) => {
          if (props.offset) {
            return Utilities.WidthMixin(columnCount, props.offset);
          }
          return null;
        })(props),
    }, Utilities.ResponsiveWidthMixin(columnCount, props))
  },
};

class Column extends React.Component {
  render() {
    return (
      <div className={Utilities.MakeClassName('column ', this.props.className)} style={styles.columnMixin(this.context.columns, this.props)}>
        {this.props.children}
      </div>
    )
  }
}

Column.propTypes = {
  width: React.PropTypes.number.isRequired,
  offset: React.PropTypes.number,
  smallWidth: React.PropTypes.number,
  mediumWidth: React.PropTypes.number,
  largeWidth: React.PropTypes.number,
  xlargeWidth: React.PropTypes.number,
  xxlargeWidth: React.PropTypes.number,
  xxxlargeWidth: React.PropTypes.number,
};

Column.contextTypes = {
  columns: React.PropTypes.number.isRequired,
};

Column = Radium(Column);

export default Column;
