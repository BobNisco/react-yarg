'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utilities = (function () {
  function Utilities() {
    _classCallCheck(this, Utilities);
  }

  _createClass(Utilities, null, [{
    key: 'MakeClassName',
    value: function MakeClassName(baseClassName, moreClassNames) {
      var className = baseClassName;
      if (moreClassNames) {
        className += moreClassNames;
      }
      return className.trim();
    }
  }, {
    key: 'WidthMixin',
    value: function WidthMixin(columnsCount, width) {
      return 100 / columnsCount * width + '%';
    }
  }, {
    key: 'ResponsiveWidthMixin',
    value: function ResponsiveWidthMixin(columnsCount, props) {
      var columnRatio = columnsCount / props.width;
      // 1. Set the normal width you would expect from your grid
      var rules = {
        width: Utilities.WidthMixin(columnsCount, props.width)
      };
      // 2. If we are trying to fit more than 2 columns in a row at a breakpoint, collapse it
      if (columnRatio >= 2) {
        rules['@media (min-width: 320px) and (max-width: 479px)'] = {
          width: '100%'
        };
        rules['@media (min-width: 480px) and (max-width: 639px)'] = {
          width: '100%'
        };
      }

      // 3. Allow for any user overrides if they would like
      if (props.smallWidth) {
        rules['@media (min-width: 320px) and (max-width: 479px)'] = {
          width: Utilities.WidthMixin(columnsCount, props.smallWidth)
        };
      }

      if (props.mediumWidth) {
        rules['@media (min-width: 480px) and (max-width: 639px)'] = {
          width: Utilities.WidthMixin(columnsCount, props.mediumWidth)
        };
      }

      if (props.largeWidth) {
        rules['@media (min-width: 640px) and (max-width: 1023px)'] = {
          width: Utilities.WidthMixin(columnsCount, props.largeWidth)
        };
      }

      if (props.xlargeWidth) {
        rules['@media (min-width: 1024px) and (max-width: 1365px)'] = {
          width: Utilities.WidthMixin(columnsCount, props.xlargeWidth)
        };
      }

      if (props.xxlargeWidth) {
        rules['@media (min-width: 1366px) and (max-width: 1919px)'] = {
          width: Utilities.WidthMixin(columnsCount, props.xxlargeWidth)
        };
      }

      if (props.xxxlargeWidth) {
        rules['@media (min-width: 1920px)'] = {
          width: Utilities.WidthMixin(columnsCount, props.xxxlargeWidth)
        };
      }

      return rules;
    }
  }]);

  return Utilities;
})();

exports.default = Utilities;

Utilities.BreakPoints = {
  small: {
    min: 320,
    max: 479
  },
  medium: {
    min: 480,
    max: 639
  },
  large: {
    min: 640,
    max: 1023
  },
  xlarge: {
    min: 1024,
    max: 1365
  },
  xxlarge: {
    min: 1366,
    max: 1919
  },
  xxxlarge: {
    min: 1920
  }
};