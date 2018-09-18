'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CircularProgress = require('@material-ui/core/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _ButtonLabel = require('./ButtonLabel');

var _ButtonLabel2 = _interopRequireDefault(_ButtonLabel);

var _ln = require('ln3');

var _ln2 = _interopRequireDefault(_ln);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitFlatButton = function (_Component) {
  _inherits(SubmitFlatButton, _Component);

  function SubmitFlatButton(props, context) {
    _classCallCheck(this, SubmitFlatButton);

    var _this = _possibleConstructorReturn(this, (SubmitFlatButton.__proto__ || Object.getPrototypeOf(SubmitFlatButton)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SubmitFlatButton, [{
    key: 'handleClick',
    value: function handleClick(event) {
      if (!this.props.waiting && this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          iconStyle = _props.iconStyle,
          iconSize = _props.iconSize,
          label = _props.label,
          waiting = _props.waiting,
          labelPosition = _props.labelPosition,
          alwaysShowLabel = _props.alwaysShowLabel,
          color = _props.color,
          other = _objectWithoutProperties(_props, ['icon', 'iconStyle', 'iconSize', 'label', 'waiting', 'labelPosition', 'alwaysShowLabel', 'color']);

      if (!label) {
        label = _ln2.default.text("button.ok", "OK");
      }

      if (!color) {
        color = "primary";
      }

      if (waiting) {
        var style = _extends({}, iconStyle);

        style.position = 'relative';
        style.left = -4;
        style.top = 2;

        icon = _react2.default.createElement(_CircularProgress2.default, { style: style, thickness: 5, size: iconSize || 14 });
        if (!alwaysShowLabel) {
          label = null;
        }
      }

      return _react2.default.createElement(
        _Button2.default,
        _extends({
          type: 'submit',
          onClick: this.handleClick,
          onSubmit: this.handleClick,
          color: color
        }, other),
        _react2.default.createElement(_ButtonLabel2.default, {
          label: label,
          icon: icon,
          labelPosition: labelPosition
        })
      );
    }
  }]);

  return SubmitFlatButton;
}(_react.Component);

exports.default = SubmitFlatButton;