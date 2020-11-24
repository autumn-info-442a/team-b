import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


/*
Component that will act as a confirmation dialog asking users if they want to add card to their favorites
*/
export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      saveLocation();
      setOpen(false);
    };

    function saveLocation() {
      let saved = JSON.parse(localStorage.getItem("counties"));
      if (saved) {
        saved.push(props.info);
      } else {
        saved = [props.info];
      }
      localStorage.setItem("counties", JSON.stringify(saved));
      alert("Location Saved!");
    }
  
    return (
      <div>
        <button className="save-button" onClick={handleClickOpen}>
          Add to Dashboard
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Favorite location"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to add this location to your homepage?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }