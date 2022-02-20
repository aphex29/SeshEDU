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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function EditPopup(props) {

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
    const [currAvailability, setCurrAvailability] = useState(convertFloatsToDateTime({...props.currAvailability}));
    const [newAvailabilty, setNewAvailability] = useState(convertFloatsToDateTime({...props.currAvailability}));
    
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickDelete = (id) => {
      const {[id]: temp, ...rest} = props.availability;
      props.setAvailability(rest);
    }
  
    const handleClose = () => {
      setNewAvailability(currAvailability);
      setOpen(false);
    }

    const handleSubmit = () => {
      setOpen(false);
      setCurrAvailability(newAvailabilty);
    }
  
    return (
      <div>
        <IconButton onClick={handleClickOpen} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={props.deleteAvailability(newAvailabilty)}  aria-label="delete">
          <DeleteIcon />
        </IconButton>
        
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={props.updateAvailability(newAvailabilty)}>
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
                <Button handleClick={handleClose} value="Cancel" />
                <Button handleClick={handleSubmit} value="Save" />
              </DialogActions>
          </form>
        </Dialog>
      </div>
    );
}


export default EditPopup;
  