'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InfoFiller = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('@material-ui/core/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _ln = require('ln3');

var _ln2 = _interopRequireDefault(_ln);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoFiller = exports.InfoFiller = function (_Component) {
    _inherits(InfoFiller, _Component);

    function InfoFiller() {
        _classCallCheck(this, InfoFiller);

        return _possibleConstructorReturn(this, (InfoFiller.__proto__ || Object.getPrototypeOf(InfoFiller)).apply(this, arguments));
    }

    _createClass(InfoFiller, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                innerStyle = _props.innerStyle,
                children = _props.children,
                minHeight = _props.minHeight,
                other = _objectWithoutProperties(_props, ['style', 'innerStyle', 'children', 'minHeight']);

            return _react2.default.createElement(
                'div',
                _extends({ style: _extends({}, style, { position: "relative", minHeight: minHeight || "100%" }) }, other),
                _react2.default.createElement(
                    'div',
                    { style: _extends({}, innerStyle, { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }) },
                    children
                )
            );
        }
    }]);

    return InfoFiller;
}(_react.Component);

var InfoWaiter = function (_Component2) {
    _inherits(InfoWaiter, _Component2);

    function InfoWaiter() {
        _classCallCheck(this, InfoWaiter);

        return _possibleConstructorReturn(this, (InfoWaiter.__proto__ || Object.getPrototypeOf(InfoWaiter)).apply(this, arguments));
    }

    _createClass(InfoWaiter, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                label = _props2.label,
                progressSize = _props2.progressSize,
                progressWidth = _props2.progressWidth,
                children = _props2.children,
                other = _objectWithoutProperties(_props2, ['label', 'progressSize', 'progressWidth', 'children']);

            return _react2.default.createElement(
                InfoFiller,
                other,
                _react2.default.createElement(_CircularProgress2.default, { size: progressSize || 60, thickness: progressWidth || 7 }),
                typeof label === 'underfined' || label !== false && label !== "" && label !== null ? _react2.default.createElement('br', null) : null,
                typeof label === 'underfined' ? _ln2.default.text("title.please.wait", "Please wait...") : label,
                children
            );
        }
    }]);

    return InfoWaiter;
}(_react.Component);

exports.default = InfoWaiter;