import React, { useState, useEffect } from 'react';
import Button from '../../button/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';





function NewPopup(props) {
  const [currEducation, setCurrEducation] = useState({
    school: '',
    degreeType: '',
    major: '',
    startYear: '',
    endYear: '',
  })

  const [newEducation, setNewEducation] = useState({
    school: '',
    degreeType: '',
    major: '',
    startYear: '',
    endYear: '',
  })

  const [open, setOpen] = useState(false);

  const handleEducationChange = ({ target }) => {
      const { name, value } = target;
      setNewEducation((prev) => ({...prev, [name]: value}));
  }

  const handleClickOpen = () => {
    setNewEducation(currEducation);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (e) => {
    setOpen(false);
  }

  return (
    <div>
      <IconButton onClick={handleClickOpen} aria-label="edit">
          <AddCircleOutlineIcon />
      </IconButton>
      
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={props.creatEducation(newEducation)}>

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
                        required
                        className="standard-basic" 
                        label="School"
                        name="school" 
                        variant="standard" 
                        value={newEducation.school}
                        onInput={handleEducationChange}

                        />
                  </Box>

                    <TextField 
                        required
                        className="standard-basic" 
                        label="Degree type"
                        name="degreeType" 
                        variant="standard" 
                        value={newEducation.degreeType}
                        onInput={handleEducationChange}

                        />

                    <TextField 
                        required
                        className="standard-basic" 
                        label="Major"
                        name="major" 
                        variant="standard" 
                        value={newEducation.major}
                        onInput={handleEducationChange}

                        />
                    

                    <TextField 
                        required
                        className="standard-basic" 
                        label="Start Year"
                        name="startYear" 
                        variant="standard" 
                        value={newEducation.startYear}
                        onInput={handleEducationChange}

                        />

                    <TextField 
                        required
                        className="standard-basic" 
                        label="End Year"
                        name="endYear" 
                        variant="standard" 
                        value={newEducation.endYear}
                        onInput={handleEducationChange}

                        />
                  </Box>
                  
          </DialogContent>
        
          <DialogActions>
            <Button type="button" handleClick={handleClose} value="Cancel" />
            <Button type="submit" handleClick={handleSubmit}  value="Submit" />
          </DialogActions>
        
        </form >
        
      </Dialog>
    </div>
  );
}


export default NewPopup;