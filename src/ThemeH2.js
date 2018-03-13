import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const ThemeH2 = (props) => (
  <h2 style={{
      fontWeight: "normal",
      fontFamily: props.muiTheme.fontFamily,
    }}>
    {props.caption}
  </h2>
);

//

export default muiThemeable()(ThemeH2);
