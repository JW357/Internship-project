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
  const [userInput, setUserInput] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
    errorName: '',
    errorEmail: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.name.length < 2) {
      setUserInput({ ...userInput, errorName: 'Invalid e-mail address' });
      // eslint-disable-next-line no-debugger
      debugger;
    } else {
      // eslint-disable-next-line no-debugger
      debugger;
      setUserInput({ ...userInput, errorName: '' });
    }
    const validation = /\S+@\S+\.\S+/;

    if (validation.test(userInput.email) === false) {
      setUserInput({ ...userInput, errorEmail: 'Invalid e-mail address' });
    } else {
      setUserInput({ ...userInput, errorEmail: '' });
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
              <h1 className={classes.modalHeader}>Contact with Us</h1>
              <form onSubmit={(e) => handleSubmit(e)} className={classes.inputs}>
                <TextField
                  className={classes.textInput}
                  onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                  value={userInput.name}
                  error={userInput.errorName}
                  helperText={userInput.errorName}
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setUserInput({ ...userInput, surname: e.target.value })}
                  className={classes.textInput}
                  label="Surname"
                  variant="outlined"
                />
                <TextField
                  className={classes.textInput}
                  onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                  value={userInput.email}
                  error={userInput.errorEmail}
                  helperText={userInput.errorEmail}
                  label="e-mail address"
                  variant="outlined"
                />
                <TextField
                  className={classes.messageInput}
                  onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                  multiline
                  rows={6}
                  label="Message"
                  variant="outlined"
                />
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
