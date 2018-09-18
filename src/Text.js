import React from 'react';
import { Typography } from '@material-ui/core';


const Text = (props) => (
  <Typography variant={ props.variant || "body1" } style={{ display: "inline-block" }}>
    { props.text }
    { props.children }
  </Typography>
);

export default Text;
