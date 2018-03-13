'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ThemeDiv = function ThemeDiv(props) {
    var style = props.style,
        fullWidth = props.fullWidth,
        fullHeight = props.fullHeight,
        muiTheme = props.muiTheme,
        other = _objectWithoutProperties(props, ['style', 'fullWidth', 'fullHeight', 'muiTheme']);

    var addStyle = {};

    if (fullHeight) addStyle.height = "100%";
    if (fullWidth) addStyle.width = "100%";

    return _react2.default.createElement('div', _extends({
        style: _extends({}, addStyle, style, {
            fontWeight: "normal",
            fontFamily: muiTheme.fontFamily,
            display: "inline-block"
        })
    }, other));
};

exports.default = (0, _muiThemeable2.default)()(ThemeDiv);