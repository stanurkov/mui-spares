'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _flexband = require('flexband');

var _flexband2 = _interopRequireDefault(_flexband);

var _ThemeH = require('./ThemeH2');

var _ThemeH2 = _interopRequireDefault(_ThemeH);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NamedPaper = function (_Component) {
    _inherits(NamedPaper, _Component);

    function NamedPaper() {
        _classCallCheck(this, NamedPaper);

        return _possibleConstructorReturn(this, (NamedPaper.__proto__ || Object.getPrototypeOf(NamedPaper)).apply(this, arguments));
    }

    _createClass(NamedPaper, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                fullWidth = _props.fullWidth,
                fullHeight = _props.fullHeight,
                innerStyle = _props.innerStyle,
                headStyle = _props.headStyle,
                titleStyle = _props.titleStyle,
                caption = _props.caption,
                title = _props.title,
                children = _props.children,
                zDepth = _props.zDepth,
                style = _props.style,
                muiTheme = _props.muiTheme,
                other = _objectWithoutProperties(_props, ['fullWidth', 'fullHeight', 'innerStyle', 'headStyle', 'titleStyle', 'caption', 'title', 'children', 'zDepth', 'style', 'muiTheme']);

            var addStyle = _extends({}, style);

            if (fullWidth) addStyle.width = "100%";
            if (fullHeight) addStyle.height = "100%";

            if (!headStyle) headStyle = { backgroundColor: "rgba(120, 120, 120, 0.2)", padding: 0, margin: 0 };

            return _react2.default.createElement(
                _Paper2.default,
                _extends({ zDepth: zDepth || 2, style: addStyle }, other),
                _react2.default.createElement(
                    _flexband2.default,
                    { direction: 'column', justify: 'space-between', fullHeight: true },
                    _react2.default.createElement(
                        _flexband.FlexBandItem,
                        { grow: '0', style: headStyle },
                        _react2.default.createElement(
                            'h3',
                            { style: _extends({}, titleStyle, { margin: 0, padding: "1em", verticalAlign: "center", fontWeight: "normal", fontFamily: muiTheme.fontFamily }) },
                            title || caption
                        )
                    ),
                    _react2.default.createElement(
                        _flexband.FlexBandItem,
                        { grow: '1' },
                        children
                    )
                )
            );
        }
    }]);

    return NamedPaper;
}(_react.Component);

exports.default = (0, _muiThemeable2.default)()(NamedPaper);