import React, { useState } from 'react';
import {
  Button, Checkbox, FormControl, FormControlLabel, Modal, TextField,
} from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useStyles } from './style';

export default function ContactModal({
  open,
  setOpen,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setNameErrorMessage('');
    setEmailErrorMessage('');

    if (name.length < 2) {
      setNameError(true);
      setNameErrorMessage('Name must contain more than 2 characters');
    }

    const validation = /\S+@\S+\.\S+/;

    if (validation.test(email) === false) {
      e.preventDefault();
      setEmailError(true);
      setEmailErrorMessage('Invalid e-mail address');
    }
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
              <h1 className={classes.modalHeader}>Contact wits Us</h1>
              <form onSubmit={handleSubmit} className={classes.inputs}>
                <TextField
                  className={classes.textInput}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameErrorMessage}
                  label="Name"
                  variant="outlined"
                />
                <TextField className={classes.textInput} label="Surname" variant="outlined" />
                <TextField
                  className={classes.textInput}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailErrorMessage}
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
