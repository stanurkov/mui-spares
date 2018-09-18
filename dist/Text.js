'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(props) {
  return _react2.default.createElement(
    _core.Typography,
    { variant: props.variant || "body1", style: { display: "inline-block" } },
    props.text,
    props.children
  );
};

exports.default = Text;