import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ButtonLabel from './ButtonLabel';
import ln3 from 'ln3';


class SubmitFlatButton extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      if (!this.props.waiting && this.props.onClick) {
        this.props.onClick(event);
      }
  }

  render() {
    let { 
      icon,
      iconStyle,
      iconSize,
      label,
      waiting,
      labelPosition,
      alwaysShowLabel,
      color,
      ...other,
    } = this.props;

    if (!label) {
      label = ln3.text("button.ok", "OK");
    }

    if (!color) {
      color = "primary";
    }

    if (waiting) {
      const 
        style = { ...iconStyle};

      style.position = 'relative';
      style.left = -4;
      style.top = 2;

      icon = (
        <CircularProgress style={style} thickness={5} size={iconSize || 14} />
      );
      if (!alwaysShowLabel) {
        label = null;
      }
    }
    

    return (
      <Button
        type="submit"
        onClick={ this.handleClick }
        onSubmit={ this.handleClick }
        color={ color }
        {...other}        
      >
        <ButtonLabel 
          label={ label }
          icon={ icon }
          labelPosition={ labelPosition }
        /> 
      </Button>
    );
  }

}

export default SubmitFlatButton;
