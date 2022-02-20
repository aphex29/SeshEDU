import React, { useState } from 'react';
import Button from '../../button/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function EditPopup(props) {

    const [currSkill, setCurrSkill] = useState({...props.currSkill})
    const [newSkill, setNewSkill] = useState({...props.currSkill})
    const [open, setOpen] = useState(false);

    const handleSkillChange = ({ target }) => {
        const { name, value } = target;
        setNewSkill((prev) => ({...prev, [name]: value}));
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickDelete = (id) => {
      const {[id]: temp, ...rest} = props.skills;
      props.skills(rest);
    }
  
    const handleClose = () => {
      setNewSkill(currSkill);
      setOpen(false);
    }

    const handleSubmit = () => {
    
    }
  
    return (
      <div>
        <IconButton onClick={props.deleteSkill(currSkill)}  aria-label="delete">
          <DeleteIcon />
        </IconButton>
        
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>skills</DialogTitle>
            <br />
            <DialogContent>
                    <TextField 
                        id="standard-basic" 
                        label="Skill"
                        name="skill" 
                        variant="standard" 
                        value={newSkill.skill}
                        onChange={handleSkillChange}

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