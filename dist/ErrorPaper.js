'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _colors = require('@material-ui/core/colors');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorPaper = function (_Component) {
    _inherits(ErrorPaper, _Component);

    function ErrorPaper() {
        _classCallCheck(this, ErrorPaper);

        return _possibleConstructorReturn(this, (ErrorPaper.__proto__ || Object.getPrototypeOf(ErrorPaper)).apply(this, arguments));
    }

    _createClass(ErrorPaper, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                errorText = _props.errorText,
                zDepth = _props.zDepth,
                margin = _props.margin,
                padding = _props.padding,
                color = _props.color;


            if (errorText) {
                return _react2.default.createElement(
                    _Paper2.default,
                    {
                        elevation: zDepth || 2,
                        style: {
                            margin: margin || 16,
                            padding: padding || 8,
                            backgroundColor: color || _colors.red[100]
                        }
                    },
                    _react2.default.createElement(
                        _core.Typography,
                        { variant: 'body2' },
                        errorText
                    )
                );
            } else {
                return null;
            }
        }
    }]);

    return ErrorPaper;
}(_react.Component);

ErrorPaper.propTypes = {
    /** (string or element) Error text to be displayed. If it is null or undefined, the component will render as null */
    errorText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    /** Z-depth of the paper */
    zDepth: _propTypes2.default.number,
    /** Margin CSS property to override default */
    margin: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /** Padding CSS property to override default */
    padding: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /** Background color of the paper, default is red100 */
    color: _propTypes2.default.string
};
exports.default = ErrorPaper;