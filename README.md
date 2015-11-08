# react-yarg

Yet Another Responive Grid. But this ain't your grandparent's grid.

What makes react-yarg different is that **you can specify any amount of columns**. If this is already too crazy for you, don't worry as we default to 12 columns without you having to do anything at all.

## Features

* Any amount of user-specified columns!
* Fully fluid
* Intelligent column folding in smaller screen sizes
* 6 breakpoints (small/medium/large/xlarge/xxlarge/xxxlarge+) with over-rideable column sizing per breakpoint

## Installation

```
npm install --save-dev react-yarg
```

## Quick Examples

This is a basic example that shows a basic React Component with a basic container and using the default 12 grid system. There is a single row with 2 columns in it that each take up 6 columns each. [Live demo on gh-pages](http://bobnisco.github.io/react-yarg/)

```jsx
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
            <p>This has 2 columns, wow!</p>
          </Yarg.Column>
        </Yarg.Row>
      </Yarg.Container>
    )
  }
}
```

A more advanced example shows that you can set the Yarg.Container columns prop to be any integer value. You can also specify breakpoint-specific sizes for each column so that you can control the flow of the grid in the sizes. [Live demo on gh-pages](http://bobnisco.github.io/react-yarg/)

```jsx
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
```
