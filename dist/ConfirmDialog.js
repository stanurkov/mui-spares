'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confirmButtons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _ln = require('ln3');

var _ln2 = _interopRequireDefault(_ln);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirmButtons = exports.confirmButtons = {
    yesNo: "yes-no",
    noYes: "no-yes",
    yesNoCancel: "yes-no-cancel",
    okCancel: "ok-cancel",
    ok: "ok"
};

var ConfirmDialog = function (_Component) {
    _inherits(ConfirmDialog, _Component);

    function ConfirmDialog(props) {
        var _ref;

        _classCallCheck(this, ConfirmDialog);

        for (var _len = arguments.length, other = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            other[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ConfirmDialog.__proto__ || Object.getPrototypeOf(ConfirmDialog)).call.apply(_ref, [this, props].concat(other)));

        _this.handleConfirm = function () {
            if (_this.props.container) {
                _this.props.container.handleConfirm();
            } else {
                if (_this.props.onConfirm) {
                    _this.props.onConfirm();
                } else _this.handleCancel();
            }
        };

        _this.handleCancel = function () {
            if (_this.props.container) {
                _this.props.container.handleCancel();
            } else {
                if (_this.props.onCancel) {
                    _this.props.onCancel();
                }
            }
        };

        _this.handleDeny = function () {
            if (_this.props.container) {
                _this.props.container.handleDeny();
            } else {
                if (_this.props.onDeny) {
                    _this.props.onDeny();
                } else _this.handleCancel();
            }
        };

        _this.state = {
            open: false
        };

        if (props.container) {
            _this.armContainer(props.container);
        }
        return _this;
    }

    _createClass(ConfirmDialog, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.container != nextProps.container) {
                this.armContainer(nextProps.container);
            }
        }
    }, {
        key: 'armContainer',
        value: function armContainer(container) {
            if (container) {
                container.dialog = this;

                container.execute = function (_ref2) {
                    var content = _ref2.content,
                        onConfirm = _ref2.onConfirm,
                        onCancel = _ref2.onCancel,
                        onDeny = _ref2.onDeny,
                        onTimeout = _ref2.onTimeout,
                        title = _ref2.title,
                        noModal = _ref2.noModal,
                        forceModal = _ref2.forceModal,
                        buttons = _ref2.buttons,
                        timeout = _ref2.timeout;

                    container.content = content;
                    container.onConfirm = onConfirm;
                    container.onCancel = onCancel;
                    container.onDeny = onDeny;
                    if (timeout) {
                        setTimeout(function () {
                            container.handleTimeout();
                        }, timeout);
                    }
                    container.dialog.setState({ open: true, title: title, buttons: buttons, forceModal: forceModal, noModal: noModal });
                };

                container.handleConfirm = function () {
                    if (container.onConfirm) {
                        container.dialog.setState({ open: false });
                        container.onConfirm();
                    } else {
                        container.handleCancel();
                    }
                };

                container.handleDeny = function () {
                    if (container.onDeny) {
                        container.dialog.setState({ open: false });
                        container.onDeny();
                    } else {
                        container.handleCancel();
                    }
                };

                container.handleCancel = function () {
                    container.dialog.setState({ open: false });
                    if (container.onCancel) {
                        container.onCancel();
                    }
                };

                container.handleTimeout = function () {
                    if (container.onTimeout) {
                        container.dialog.setState({ open: false });
                        container.onTimeout();
                    } else {
                        container.handleConfirm();
                    }
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var actions = null;
            var container = this.props.container;
            var buttons = this.props.buttons || this.state.buttons;
            var modal = false || this.state.forceModal;

            switch (buttons) {
                case confirmButtons.ok:
                    actions = [_react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.ok", "OK"), primary: true, onClick: this.handleConfirm })];
                    break;
                case confirmButtons.yesNo:
                    actions = [_react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.no", "No"), onClick: this.handleDeny }), _react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.yes", "Yes"), primary: true, onClick: this.handleConfirm })];
                    modal = true;
                    break;
                case confirmButtons.noYes:
                    actions = [_react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.yes", "Yes"), onClick: this.handleConfirm }), _react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.no", "No"), primary: true, onClick: this.handleDeny })];
                    modal = true;
                    break;
                case confirmButtons.okCancel:
                    actions = [_react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.cancel", "Cancel"), onClick: this.handleCancel }), _react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.ok", "OK"), primary: true, onClick: this.handleConfirm })];
                    break;
                default:
                    actions = [_react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.cancel", "Cancel"), onClick: this.handleCancel }), _react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.no", "No"), onClick: this.handleDeny }), _react2.default.createElement(_FlatButton2.default, { label: _ln2.default.text("button.yes", "Yes"), primary: true, onClick: this.handleConfirm })];
            }

            if (this.state.noModal) {
                modal = false;
            }

            return _react2.default.createElement(
                _Dialog2.default,
                {
                    open: this.props.open || this.state.open,
                    actions: actions,
                    modal: modal,
                    title: this.props.title || this.state.title,
                    onRequestClose: this.handleCancel
                },
                container ? container.content : this.props.children
            );
        }
    }]);

    return ConfirmDialog;
}(_react.Component);

exports.default = ConfirmDialog;