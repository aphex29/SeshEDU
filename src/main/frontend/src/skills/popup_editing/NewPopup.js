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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


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
    
      props.setSkills((prev) => ({...prev, [newSkill.id]:newSkill}));
      setOpen(false);
      setCurrSkill(newSkill);
    }
  
    return (
      <div>
        <IconButton onClick={handleClickOpen} aria-label="edit">
          <AddCircleOutlineIcon />
        </IconButton>
        
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Skills</DialogTitle>
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