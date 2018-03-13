'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeH2 = function ThemeH2(props) {
  return _react2.default.createElement(
    'h2',
    { style: {
        fontWeight: "normal",
        fontFamily: props.muiTheme.fontFamily
      } },
    props.caption
  );
};

//

exports.default = (0, _muiThemeable2.default)()(ThemeH2);