'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(props) {
  return _react2.default.createElement(
    'span',
    { style: {
        fontWeight: "normal",
        fontFamily: props.muiTheme.fontFamily
      } },
    props.text
  );
};

exports.default = (0, _muiThemeable2.default)()(Text);