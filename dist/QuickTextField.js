'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nextId = 1;

var QuickTextField = function (_React$Component) {
    _inherits(QuickTextField, _React$Component);

    function QuickTextField(props) {
        var _ref;

        _classCallCheck(this, QuickTextField);

        for (var _len = arguments.length, other = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            other[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = QuickTextField.__proto__ || Object.getPrototypeOf(QuickTextField)).call.apply(_ref, [this, props].concat(other)));

        _this.handleValueChange = function (event) {
            _this.props.onValueChange(event, event.target.value);
        };

        _this.uid = nextId++;
        return _this;
    }

    _createClass(QuickTextField, [{
        key: 'labelStart',
        value: function labelStart() {
            return "text-input";
        }
    }, {
        key: 'renderInput',
        value: function renderInput(id, value, props) {
            return _react2.default.createElement(_core.Input, _extends({
                id: id,
                value: value
            }, props));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                errorText = _props.errorText,
                hintText = _props.hintText,
                floatingLabelText = _props.floatingLabelText,
                value = _props.value,
                fullWidth = _props.fullWidth,
                keyboardFocused = _props.keyboardFocused,
                contentStyle = _props.contentStyle,
                id = _props.id,
                onValueChange = _props.onValueChange,
                other = _objectWithoutProperties(_props, ['errorText', 'hintText', 'floatingLabelText', 'value', 'fullWidth', 'keyboardFocused', 'contentStyle', 'id', 'onValueChange']);

            if (onValueChange) {
                other.onChange = this.handleValueChange;
            }

            if (hintText) {
                other.placeholder = hintText;
            }

            var hasError = errorText ? true : false;
            var inputName = id ? id : this.labelStart() + this.uid;

            return _react2.default.createElement(
                _core.FormControl,
                {
                    error: hasError,
                    fullWidth: fullWidth,
                    'aria-describedby': hasError ? "name-error-text" + this.uid : undefined
                },
                _react2.default.createElement(
                    _core.InputLabel,
                    { htmlFor: inputName },
                    floatingLabelText
                ),
                this.renderInput(inputName, value, other),
                hasError ? _react2.default.createElement(
                    _core.FormHelperText,
                    { id: "name-error-text" + this.uid },
                    errorText
                ) : null
            );
        }
    }]);

    return QuickTextField;
}(_react2.default.Component);

exports.default = QuickTextField;