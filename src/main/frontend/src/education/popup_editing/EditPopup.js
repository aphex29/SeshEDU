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
import Box from '@mui/material/Box';



function EditPopup(props) {

    const [currEducation, setCurrEducation] = useState({...props.currEducation})
    const [newEducation, setNewEducation] = useState({...props.currEducation})
    const [open, setOpen] = useState(false);

    const handleEducationChange = ({ target }) => {
        const { name, value } = target;
        setNewEducation((prev) => ({...prev, [name]: value}));
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setNewEducation(currEducation);
      setOpen(false);
    }

    const handleSubmit = () => {
      setOpen(false);
      setCurrEducation(newEducation);
    }
  
    return (
      <div>
        <IconButton onClick={handleClickOpen} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={props.deleteEducation(newEducation)}  aria-label="delete">
          <DeleteIcon />
        </IconButton>
        
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={props.updateEducation(newEducation)}>
              <DialogTitle>Education</DialogTitle>
              <br />
              <DialogContent>
                <Box
                    component="div"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Box
                    component="div"
                    sx={{
                      '& > :not(style)': { m: 0, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                      <TextField 
                          className="standard-basic" 
                          label="School"
                          name="school" 
                          variant="standard" 
                          value={newEducation.school}
                          onChange={handleEducationChange}

                          />
                    </Box>

                      <TextField 
                          className="standard-basic" 
                          label="Degree type"
                          name="degreeType" 
                          variant="standard" 
                          value={newEducation.degreeType}
                          onChange={handleEducationChange}

                          />

                      <TextField 
                          className="standard-basic" 
                          label="Major"
                          name="major" 
                          variant="standard" 
                          value={newEducation.major}
                          onChange={handleEducationChange}

                          />
                      

                      <TextField 
                          className="standard-basic" 
                          label="Start Year"
                          name="startYear" 
                          variant="standard" 
                          value={newEducation.startYear}
                          onChange={handleEducationChange}

                          />

                      <TextField 
                          className="standard-basic" 
                          label="End Year"
                          name="endYear" 
                          variant="standard" 
                          value={newEducation.endYear}
                          onChange={handleEducationChange}

                          />
                    </Box>
              </DialogContent>
            
              <DialogActions>
                <Button type="button" handleClick={handleClose} value="Cancel" />
                <Button type="submit" handleClick={handleSubmit} value="Save" />
              </DialogActions>
            </form>
        </Dialog>
      </div>
    );
}


export default EditPopup;