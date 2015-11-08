'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Utilities = require('./Utilities');

var _Utilities2 = _interopRequireDefault(_Utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  columnMixin: function columnMixin(columnCount, props) {
    return Object.assign({
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: '1px',
      float: 'left',
      marginLeft: (function (props) {
        if (props.offset) {
          return _Utilities2.default.WidthMixin(columnCount, props.offset);
        }
        return null;
      })(props)
    }, _Utilities2.default.ResponsiveWidthMixin(columnCount, props));
  }
};

var Column = (function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Column).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Utilities2.default.MakeClassName('column ', this.props.className), style: styles.columnMixin(this.context.columns, this.props) },
        this.props.children
      );
    }
  }]);

  return Column;
})(_react2.default.Component);

Column.propTypes = {
  width: _react2.default.PropTypes.number.isRequired,
  offset: _react2.default.PropTypes.number,
  smallWidth: _react2.default.PropTypes.number,
  mediumWidth: _react2.default.PropTypes.number,
  largeWidth: _react2.default.PropTypes.number,
  xlargeWidth: _react2.default.PropTypes.number,
  xxlargeWidth: _react2.default.PropTypes.number,
  xxxlargeWidth: _react2.default.PropTypes.number
};

Column.contextTypes = {
  columns: _react2.default.PropTypes.number.isRequired
};

Column = (0, _radium2.default)(Column);

exports.default = Column;