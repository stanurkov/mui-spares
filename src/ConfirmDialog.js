import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import ln3 from 'ln3';
import { DialogActions, DialogTitle, DialogContent } from '@material-ui/core';

export const confirmButtons = {
    yesNo: "yes-no",
    noYes: "no-yes",
    yesNoCancel: "yes-no-cancel",
    okCancel: "ok-cancel",
    ok: "ok",
}

class ConfirmDialog extends Component {
    constructor(props, ...other) {
        super(props, ...other);

        this.state = {
            open: false,
        }

        if (props.container) {
            this.armContainer(props.container);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.container != nextProps.container) {
            this.armContainer(nextProps.container);
        }
    }

    armContainer(container) {
        if (container) {
            container.dialog = this;

            container.execute = ({ content, onConfirm, onCancel, onDeny, onTimeout, title, noModal, forceModal, buttons, timeout } ) => {
                container.content = content;
                container.onConfirm = onConfirm;
                container.onCancel = onCancel;
                container.onDeny = onDeny;
                if (timeout) {
                    setTimeout( ()=>{ container.handleTimeout(); }, timeout );
                }
                container.dialog.setState( { open: true, title: title, buttons: buttons, forceModal: forceModal, noModal: noModal } );
            }

            container.handleConfirm = () => {
                if (container.onConfirm) {
                    container.dialog.setState( { open: false } );
                    container.onConfirm();
                } else {
                    container.handleCancel()
                }
            };

            container.handleDeny = () => {
                if (container.onDeny) {
                    container.dialog.setState( { open: false } );
                    container.onDeny();
                } else {
                    container.handleCancel();
                }
            }

            container.handleCancel = () => {
                container.dialog.setState( { open: false } );
                if (container.onCancel) {
                    container.onCancel();
                }
            }

            container.handleTimeout = () => {
                if (container.onTimeout) {
                    container.dialog.setState( { open: false } );
                    container.onTimeout();
                } else {
                    container.handleConfirm();
                }
            }

        }
    }


    handleConfirm = () => {
        if (this.props.container) {
            this.props.container.handleConfirm();
        } else {
            if (this.props.onConfirm) {
                this.props.onConfirm();
            } else this.handleCancel();
        }
    }

    handleCancel = () => {
        if (this.props.container) {
            this.props.container.handleCancel();
        } else {
            if (this.props.onCancel) {
                this.props.onCancel();
            }
        }
    }

    handleDeny = () => {
        if (this.props.container) {
            this.props.container.handleDeny();
        } else {
            if (this.props.onDeny) {
                this.props.onDeny();
            } else this.handleCancel();
        }
    }

    render() {
        let actions = null;
        const container = this.props.container;
        const buttons = this.props.buttons || this.state.buttons;
        let modal = false || this.state.forceModal;

        switch (buttons) {
            case confirmButtons.ok:
                actions = [
                    <Button 
                        key="OK"
                        color="primary" onClick={this.handleConfirm} 
                    >
                        { ln3.text("button.ok", "OK") }  
                    </Button>
                ];
                break;
            case confirmButtons.yesNo:
                actions = [
                    <Button 
                        key="no"
                        onClick={this.handleDeny} 
                    >,
                        { ln3.text("button.no", "No") }
                    </Button>,
                    <Button 
                        key="yes"
                        color="primary" onClick={this.handleConfirm} 
                    >
                        { ln3.text("button.yes", "Yes") } 
                    </Button>
                ];
                modal = true;
                break;
            case confirmButtons.noYes:
                actions = [
                    <Button 
                        key="yes"
                        color="primary" onClick={this.handleConfirm} 
                    >
                        { ln3.text("button.yes", "Yes") } 
                    </Button>,
                    <Button 
                        key="no"
                        onClick={this.handleDeny} 
                    >
                        { ln3.text("button.no", "No") }
                    </Button>
                ];
                modal = true;
                break;
            case confirmButtons.okCancel:
                actions = [
                    <Button 
                        key="cancel"
                        onClick={this.handleCancel} 
                    >
                        { ln3.text("button.cancel", "Cancel") } 
                    </Button>,
                    <Button 
                        key="OK"
                        color="primary" onClick={this.handleConfirm} 
                    >
                        { ln3.text("button.ok", "OK") }  
                    </Button>
                ];
                break;
            default:
                actions = [
                    <Button 
                        key="cancel"
                        onClick={this.handleCancel} 
                    >
                        { ln3.text("button.cancel", "Cancel") } 
                    </Button>,
                    <Button 
                        key="no"
                        onClick={this.handleDeny} 
                    >
                        { ln3.text("button.no", "No") }
                    </Button>,
                    <Button 
                        key="yes"
                        color="primary" onClick={this.handleConfirm} 
                    >
                        { ln3.text("button.yes", "Yes") } 
                    </Button>,
                ];
        }

        if (this.state.noModal) {
            modal = false;
        }

        return (
            <Dialog
                open={this.props.open || this.state.open}
                onClose={this.handleCancel}
            >
                <DialogTitle>
                    { this.props.title || this.state.title }
                </DialogTitle>
                <DialogContent>
                    { (container) ? container.content : this.props.children}
                </DialogContent>
                <DialogActions>
                    { actions }
                </DialogActions>
            </Dialog>
        );
    }
}

export default ConfirmDialog;