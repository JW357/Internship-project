import React, { useState } from 'react';
import {
  Button, Checkbox, FormControl, FormControlLabel, Modal, TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './style';

export default function ContactModal({
  open,
  setOpen,
}) {
  const [userInput, setUserInput] = useState('');
  const [inputErrorMessage, setInputErrorMessage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputErrorMessage('');

    const error = {};

    if (userInput.length < 2) {
      error.name = 'Name must contain more than 2 characters';
    }
    const validation = /\S+@\S+\.\S+/;

    if (validation.test(userInput) === false) {
      e.preventDefault();
      error.email = 'Invalid e-mail address';
    }
    setInputErrorMessage(error);
  };

  const classes = useStyles();

  return (
    <>
      {open ? (
        <Modal open={open} className={classes.modal}>
          <div className={classes.window}>
            <div className={classes.buttonBox}>
              <Button
                className={classes.buttonClose}
                variant="contained"
                color="primary"
                onClick={() => setOpen((prev) => !prev)}
              >
                X
              </Button>
            </div>
            <div className={classes.inputBox}>
              <h1 className={classes.modalHeader}>Contact with Us</h1>
              <form onSubmit={handleSubmit} className={classes.inputs}>
                <TextField
                  className={classes.textInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  error={inputErrorMessage.name}
                  helperText={inputErrorMessage.name}
                  label="Name"
                  variant="outlined"
                />
                <TextField className={classes.textInput} label="Surname" variant="outlined" />
                <TextField
                  className={classes.textInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  error={inputErrorMessage.email}
                  helperText={inputErrorMessage.email}
                  label="e-mail address"
                  variant="outlined"
                />
                <TextField className={classes.messageInput} multiline rows={6} label="Message" variant="outlined" />
                <FormControl className={classes.formControl}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox className={classes.checkbox} color="primary" />}
                    label="I consent to the processing of my personal data"
                    labelPlacement="end"
                  />
                </FormControl>
                <Button type="submit" className={classes.submitButton} variant="contained" color="primary">Submit</Button>
              </form>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

ContactModal.propTypes = {
  open: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};
