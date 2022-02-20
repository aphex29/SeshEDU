import React, { useState } from 'react';
import Button from '../../button/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function EditPopup(props) {

    const getUserId = (skillsMap) => {
      for (let key in skillsMap) {
        return skillsMap[key].userId;
      }
    }

    const [userId, setUserId] = useState(getUserId(props.skills))

    const [currSkill, setCurrSkill] = useState({
      userId: userId,
      skill: ''
    })
    
    const [newSkill, setNewSkill] = useState({
      userId: userId,
      skill: ''
    })

    const [open, setOpen] = useState(false);

    const handleSkillChange = ({ target }) => {
        const { name, value } = target;
        setNewSkill((prev) => ({...prev, [name]: value}));
    }
  
    const handleClickOpen = () => {
      setNewSkill(currSkill);
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
          <form onSubmit={props.createSkill(newSkill)}>
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
              <Button type="button" handleClick={handleClose} value="Cancel" />
              
              <Button type="submit" handleClick={handleSubmit} value="Save" />
              
            </DialogActions>
          </form>
          
          <DialogActions>
              
              
            </DialogActions>
        </Dialog>
      </div>
    );
}


export default EditPopup;