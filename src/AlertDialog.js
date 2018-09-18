import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
    state = {
        open: false,
    };

    handleClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                { (this.props.title) ? (
                        <DialogTitle id="alert-dialog-title">
                            { this.props.title }
                        </DialogTitle> 
                    ): null
                }
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        { this.props.message }
                    </DialogContentText>
                    { this.props.extra || this.props.children }
                </DialogContent>
                <DialogActions>
                    { this.props.actions }
                </DialogActions>
            </Dialog>
    );      
  }
}

export default AlertDialog;
