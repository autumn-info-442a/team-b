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
      setOpen(false);
    };

    function saveLocation() {
      let saved = JSON.parse(localStorage.getItem("counties"));
      if (saved) {
        if (!saved.includes(props.info)) {
          saved.push(props.info);
        }
      } else {
        saved = [props.info];
      }
      localStorage.setItem("counties", JSON.stringify(saved));
      alert("Location Saved!");
      handleClose();
    }

    function unSaveLocation() {
      let saved = JSON.parse(localStorage.getItem("counties"));
      if (saved) {
         let index = saved.indexOf(props.info);
         if (index > -1) {
           saved.splice(index, 1);
           alert("Location Removed!");
           localStorage.setItem("counties", JSON.stringify(saved));
         } else {
           alert("Error: You did not have this location saved!");
         }
      } else {
        alert("You currently do not have any Saved Locations!")
      }
      handleClose();
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
              Confirm whether you would like to add or remove this location from your dashboard.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={unSaveLocation} color="primary">
              Remove
            </Button>
            <Button onClick={saveLocation} color="primary" autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }