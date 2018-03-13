import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';


class SubmitFlatButton extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      if (!this.props.waiting || this.props.onClick) {
        this.props.onClick(event);
      }
  }

  render() {
    var icon = null;
    var label = this.props.label || "Submit";

    if (this.props.waiting) {
      icon = (
        <CircularProgress style={this.props.iconStyle} size={this.props.iconSize || 24} />
      );
      if (!this.props.alwaysShowLabel) {
        label = null;
      }
    }

    return (
      <FlatButton
        label={label}
        type="submit"
        name={this.props.name}
        className={this.props.className}
        id={this.props.id}
        primary={this.props.primary}
        onClick={this.handleClick}
        onSubmit={this.handleClick}
        icon={icon}
        style={this.props.style}
        labelPosition={this.props.labelPosition}
      />
    );
  }

}

export default SubmitFlatButton;
