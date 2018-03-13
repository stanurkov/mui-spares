import React, {Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Text = (props) => (
  <span style={{
      fontWeight: "normal",
      fontFamily: props.muiTheme.fontFamily,
    }}>
    {props.text}
  </span>
);

export default muiThemeable()(Text);
