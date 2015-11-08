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

This is a basic example that shows a basic React Component with a basic container and using the default 12 grid system. There is a single row with 2 columns in it that each take up 6 columns each.

```jsx
import Yarg from 'react-yarg';
import React from 'react';

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

