'use strict';

export default class Utilities {
  static MakeClassName(baseClassName, moreClassNames) {
    let className = baseClassName;
    if (moreClassNames) {
      className += moreClassNames;
    }
    return className.trim();
  }

  static WidthMixin(columnsCount, width) {
    return ((100 / columnsCount) * width) + '%';
  }

  static ResponsiveWidthMixin(columnsCount, props) {
    let columnRatio = columnsCount / props.width;
    // 1. Set the normal width you would expect from your grid
    let rules = {
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
      }
    }

    if (props.mediumWidth) {
      rules['@media (min-width: 480px) and (max-width: 639px)'] = {
        width: Utilities.WidthMixin(columnsCount, props.mediumWidth)
      }
    }

    if (props.largeWidth) {
      rules['@media (min-width: 640px) and (max-width: 1023px)'] = {
        width: Utilities.WidthMixin(columnsCount, props.largeWidth)
      }
    }

    if (props.xlargeWidth) {
      rules['@media (min-width: 1024px) and (max-width: 1365px)'] = {
        width: Utilities.WidthMixin(columnsCount, props.xlargeWidth)
      }
    }

    if (props.xxlargeWidth) {
      rules['@media (min-width: 1366px) and (max-width: 1919px)'] = {
        width: Utilities.WidthMixin(columnsCount, props.xxlargeWidth)
      }
    }

    if (props.xxxlargeWidth) {
      rules['@media (min-width: 1920px)'] = {
        width: Utilities.WidthMixin(columnsCount, props.xxxlargeWidth)
      }
    }

    return rules;
  }
}

Utilities.BreakPoints = {
  small: {
    min: 320,
    max: 479,
  },
  medium: {
    min: 480,
    max: 639,
  },
  large: {
    min: 640,
    max: 1023,
  },
  xlarge: {
    min: 1024,
    max: 1365,
  },
  xxlarge: {
    min: 1366,
    max: 1919,
  },
  xxxlarge: {
    min: 1920,
  },
};
