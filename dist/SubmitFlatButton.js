'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      if (!this.props.waiting || this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var icon = null;
      var label = this.props.label || "Submit";

      if (this.props.waiting) {
        icon = _react2.default.createElement(_CircularProgress2.default, { style: this.props.iconStyle, size: this.props.iconSize || 24 });
        if (!this.props.alwaysShowLabel) {
          label = null;
        }
      }

      return _react2.default.createElement(_FlatButton2.default, {
        label: label,
        type: 'submit',
        name: this.props.name,
        className: this.props.className,
        id: this.props.id,
        primary: this.props.primary,
        onClick: this.handleClick,
        onSubmit: this.handleClick,
        icon: icon,
        style: this.props.style,
        labelPosition: this.props.labelPosition
      });
    }
  }]);

  return SubmitFlatButton;
}(_react.Component);

exports.default = SubmitFlatButton;