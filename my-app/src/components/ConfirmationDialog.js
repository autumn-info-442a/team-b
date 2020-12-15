import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


/*
    Component that will act as a confirmation dialog asking users if they want to add card to their favorites
    * Props:
        * Info: String that represents the CountyID to save/remove
        * Label: String that represents the label of the button that activates the display of the confirmation dialog
        * Add: If present, enables the ability to add the CountyID to favorites
        * Remove: If present, enables the ability to remove the CountyID from favorites
        * Description: String that represents the message displayed in the confirmation dialog
        * Classes: Classes that affect the styling of the button that activates the display of the confirmation dialog
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
      handleClose();
      window.location.reload();
    }

    function unSaveLocation() {
      let saved = JSON.parse(localStorage.getItem("counties"));
      if (saved) {
         let index = saved.indexOf(props.info);
         if (index > -1) {
           saved.splice(index, 1);
           localStorage.setItem("counties", JSON.stringify(saved));
         }
      }
      handleClose();
      window.location.reload();
    }
  
    return (
      <div>
        <button className={props.classes} onClick={handleClickOpen}>
          {props.label}
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
              {props.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel</Button>
            {props.remove ? <Button onClick={unSaveLocation} color="primary">Remove</Button> : <Button onClick={saveLocation} color="primary" autoFocus>Add</Button>}
          </DialogActions>
        </Dialog>
      </div>
    );
  }