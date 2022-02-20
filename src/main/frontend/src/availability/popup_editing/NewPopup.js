import React, { useState } from 'react';
import Button from '../../button/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



function NewPopup(props) {
  const getUserId = (availabilityMap) => {
    for (let key in availabilityMap) {
      return availabilityMap[key].userId;
    }
  }

  const [userId, setUserId] = useState(getUserId(props.availability))

  // parse time from float to Date object
  const convertFloatsToDateTime = (availability) => {
    let parsed = availability;
    for (let key in availability) {
      if (key === 'startTime' || key === 'endTime')  {
        let time = new Date(availability.date);
        time.setHours(parseInt(availability[key]))
        time.setMinutes((availability[key] - parseInt(availability[key])) * 60);
        parsed = {...parsed, [key]:time};
      }
    }
    return parsed;
  }

  // parse time from Date object to float
  const convertDateTimeToFloats = (availability) => {
    let parsed = availability;
    for (let key in availability) {
      if (key === 'startTime' || key === 'endTime')  {
        let hours = availability[key].getHours();
        let minutes = availability[key].getMinutes() / 60;
        let time = hours + minutes;
        parsed = {...parsed, [key]:time};
      }
    }
    return parsed;
    }
    // A single Availability
    const [currAvailability, setCurrAvailability] = useState({
        userId: userId,
        date: new Date(),
        startTime: new Date(),
        endTime: new Date()
    });
    const [newAvailabilty, setNewAvailability] = useState({
        userId: userId,
        date: new Date(),
        startTime: new Date(),
        endTime: new Date()
    });
    
    const [open, setOpen] = useState(false);
  
    
    const handleClickOpen = () => {
      setNewAvailability(currAvailability);
      setOpen(true);
    };
  
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
          <form onSubmit={props.createAvailability(newAvailabilty)}>
              <DialogTitle>Availability</DialogTitle>
              <br />
              <DialogContent>
                  <FormGroup>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                          label="Date"
                          value={newAvailabilty.date}
                          onChange={(newValue) => {
                              setNewAvailability((prev) => ({...prev, ["date"]:newValue}));
                            }}
                          renderInput={(params) => <TextField {...params} />}
                          />
                          <br />
                          <TimePicker
                              label="Start time"
                              value={newAvailabilty.startTime}
                              onChange={(newValue) => {
                                  setNewAvailability((prev) => ({...prev, ["startTime"]:newValue}));
                                }}
                              renderInput={(params) => <TextField {...params} />}
                          />
                          <br />
                          <TimePicker
                              label="End time"
                              value={newAvailabilty.endTime}
                              onChange={(newValue) => {
                                  setNewAvailability((prev) => ({...prev, ["endTime"]:newValue}));
                                }}
                              renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </FormGroup>
            </DialogContent>
          
            <DialogActions>
              <Button type="button" handleClick={handleClose} value="Cancel" />
              <Button type="submit" handleClick={handleSubmit} value="Submit"/>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
}


export default NewPopup;