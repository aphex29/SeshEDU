import React, { useState, useEffect } from 'react';
import Button from '../../button/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function EditPopup(props) {

    const [currHobby, setCurrHobby] = useState({...props.currHobby})
    const [newHobby, setNewHobby] = useState({...props.currHobby})
    const [open, setOpen] = useState(false);

    const handleHobbyChange = ({ target }) => {
        const { name, value } = target;
        setNewHobby((prev) => ({...prev, [name]: value}));
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickDelete = (id) => {
      const {[id]: temp, ...rest} = props.hobbies;
      props.hobbies(rest);
    }
  
    const handleClose = () => {
      setNewHobby(currHobby);
      setOpen(false);
    }

    const handleSubmit = () => {
    
      props.setHobbies((prev) => ({...prev, [newHobby.id]:newHobby}));
      setOpen(false);
      setCurrHobby(newHobby);
    }
  
    return (
      <div>
       
        <IconButton  aria-label="delete">
          <DeleteIcon />
        </IconButton>
        
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Hobbies</DialogTitle>
            <br />
            <DialogContent>
                    <TextField 
                        id="standard-basic" 
                        label="Hobby"
                        name="hobby" 
                        variant="standard" 
                        value={newHobby.hobby}
                        onChange={handleHobbyChange}

                        />
            </DialogContent>
          
          <DialogActions>
            <Button handleClick={handleClose} value="Cancel" />
            <Button handleClick={handleSubmit} value="Save" />
          </DialogActions>
        </Dialog>
      </div>
    );
}


export default EditPopup;