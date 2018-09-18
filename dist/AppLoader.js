'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('@material-ui/core/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _ln = require('ln3');

var _ln2 = _interopRequireDefault(_ln);

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppLoader = function (_Component) {
    _inherits(AppLoader, _Component);

    function AppLoader(props) {
        var _ref;

        _classCallCheck(this, AppLoader);

        for (var _len = arguments.length, other = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            other[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = AppLoader.__proto__ || Object.getPrototypeOf(AppLoader)).call.apply(_ref, [this, props].concat(other)));

        _this.handleComplete = function () {
            _this.setState({ finished: true, open: false });

            if (_this.props.onFinish) {
                var _this$props;

                (_this$props = _this.props).onFinish.apply(_this$props, arguments);
            }
        };

        _this.state = {
            open: props.open || true,
            finished: false,
            started: false
        };

        if (props.onStart) {
            _this.state.started = true;
            props.onStart(_this.handleComplete);
        }

        return _this;
    }

    _createClass(AppLoader, [{
        key: 'render',
        value: function render() {

            return this.state.open ? _react2.default.createElement(
                'div',
                { style: { backgroundColor: "rgba(120,120,120,0.8)", width: "100%", height: window.innerHeight, color: "#E3F2FD" } },
                _react2.default.createElement(
                    'div',
                    { className: 'centered' },
                    _react2.default.createElement(_CircularProgress2.default, { size: 60, thickness: 7 }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        _core.Typography,
                        null,
                        _ln2.default.text("title.please.wait", "Please wait...")
                    )
                )
            ) : _react2.default.createElement('span', null);
        }
    }]);

    return AppLoader;
}(_react.Component);

exports.default = AppLoader;