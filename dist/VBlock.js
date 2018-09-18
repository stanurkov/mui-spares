"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizes = {
    "x-small": 8,
    "xsmall": 8,
    "small": 12,
    "normal": 16,
    "medium": 16,
    "medium-large": 18,
    "large": 24,
    "xlarge": 32,
    "x-large": 32
};

var QuickTextField = function (_React$Component) {
    _inherits(QuickTextField, _React$Component);

    function QuickTextField() {
        _classCallCheck(this, QuickTextField);

        return _possibleConstructorReturn(this, (QuickTextField.__proto__ || Object.getPrototypeOf(QuickTextField)).apply(this, arguments));
    }

    _createClass(QuickTextField, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                directStyle = _props.directStyle,
                style = _props.style,
                className = _props.className,
                spacing = _props.spacing,
                other = _objectWithoutProperties(_props, ["directStyle", "style", "className", "spacing"]);

            var margin = spacing;

            if (typeof margin === "string") {
                margin = sizes[margin];
            }

            if (!margin) {
                margin = sizes["normal"];
            }

            if (directStyle) {
                var dStyle = _extends({}, style, { marginTop: margin, marginBottom: margin });

                return _react2.default.createElement("div", _extends({}, other, { className: className, style: dStyle }));
            } else {
                return _react2.default.createElement("div", _extends({}, other, { className: (className ? className + " " : "") + "v-margin" + margin }));
            }
        }
    }]);

    return QuickTextField;
}(_react2.default.Component);

exports.default = QuickTextField;