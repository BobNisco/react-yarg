'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utilities = require('./Utilities');

var _Utilities2 = _interopRequireDefault(_Utilities);

var _ClearFix = require('./ClearFix');

var _ClearFix2 = _interopRequireDefault(_ClearFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  row: {
    width: '100%'
  }
};

var _ref = _react2.default.createElement(_ClearFix2.default, null);

var Row = (function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row(props) {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Row).call(this, props));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Utilities2.default.MakeClassName('row ', this.props.className), style: styles.row },
        this.props.children,
        _ref
      );
    }
  }]);

  return Row;
})(_react2.default.Component);

exports.default = Row;