import React, { useState, useEffect } from 'react';
import Button from '../../button/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function EditPopup(props) {

    
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
     
    }
  
    const handleClose = () => {
      setOpen(false);
      
    }

    const handleSubmit = () => {
      setOpen(false);
    }
  
    return (
      <div>
       
        <IconButton onClick={props.deleteHobby(newHobby)}  aria-label="delete">
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