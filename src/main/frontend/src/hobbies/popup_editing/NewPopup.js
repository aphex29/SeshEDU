import React, { useState } from 'react';
import Button from '../../button/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



function NewPopup(props) {
    
    const getUserId = (hobbiesMap) => {
      for (let key in hobbiesMap) {
        return hobbiesMap[key].userId;
      }
    }

    const [userId, setUserId] = useState(getUserId(props.hobbies))
    
    const [currHobby, setCurrHobby] = useState({
      userId: userId,
      hobby: ''
    })
    const [newHobby, setNewHobby] = useState({
      userId: userId,
      hobby: ''
    })
    const [open, setOpen] = useState(false);

    const handleHobbyChange = ({ target }) => {
        const { name, value } = target;
        setNewHobby((prev) => ({...prev, [name]: value}));
    }
  
    const handleClickOpen = () => {
      setNewHobby(currHobby);
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
        <IconButton onClick={handleClickOpen} aria-label="edit">
          <AddCircleOutlineIcon />
        </IconButton>
        
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={props.createHobby(newHobby)}>
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
          </form>
          
        </Dialog>
      </div>
    );
}


export default NewPopup;