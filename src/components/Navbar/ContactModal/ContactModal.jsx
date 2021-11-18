import React, { useState } from 'react';
import {
  Button, Checkbox, FormControl, FormControlLabel, Modal, TextField,
} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FormLabel } from '@mui/material';
import { useStyles } from './style';
import { submit } from '../../../features/user';

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
  const [checked, setChecked] = useState(false);
  const [alert, setAlert] = useState('none');

  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.name.length < 2) {
      setUserInput(((prevState) => ({
        ...prevState,
        errorName: 'Name must contain at least 2 characters',
      })));
    } else {
      setUserInput(((prevState) => ({
        ...prevState,
        errorName: '',
      })));
    }
    const validation = /\S+@\S+\.\S+/;

    if (validation.test(userInput.email) === false) {
      setUserInput(((prevState) => ({
        ...prevState,
        errorEmail: 'Invalid e-mail address',
      })));
    } else {
      setUserInput({
        ...userInput,
        errorEmail: '',
      });
    }

    if (userInput.name.length >= 2
      && validation.test(userInput.email) === true
      && checked === true) {
      dispatch(
        submit({
          name: userInput.name,
          surname: userInput.surname,
          email: userInput.email,
          message: userInput.message,
        }),
        setAlert('flex'),
      );
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
              <Alert
                className={classes.formAlert}
                style={{ display: alert }}
                severity="success"
              >
                {userInput.name }
                , your message have been sent
              </Alert>
              <form onSubmit={(e) => handleSubmit(e)} className={classes.inputs}>
                <TextField
                  className={classes.textInput}
                  onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                  value={userInput.name}
                  error={userInput.errorName}
                  helperText={userInput.errorName}
                  label="Name"
                  variant="outlined"
                >
                  {user.name}
                </TextField>
                <TextField
                  onChange={(e) => setUserInput({ ...userInput, surname: e.target.value })}
                  className={classes.textInput}
                  label="Surname"
                  variant="outlined"
                >
                  {user.surname}
                </TextField>
                <TextField
                  className={classes.textInput}
                  onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                  value={userInput.email}
                  error={userInput.errorEmail}
                  helperText={userInput.errorEmail}
                  label="e-mail address"
                  variant="outlined"
                >
                  {user.email}
                </TextField>
                <TextField
                  className={classes.messageInput}
                  onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                  value={userInput.message}
                  multiline
                  rows={6}
                  label="Message"
                  variant="outlined"
                >
                  {user.message}
                </TextField>
                <FormLabel className={classes.formLabel}>* required</FormLabel>
                <FormControl className={classes.formControl}>
                  <FormControlLabel
                    value="end"
                    control={(
                      <Checkbox
                        color="primary"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                      />
                    )}
                    label="I consent to the processing of my personal data *"
                    labelPlacement="end"
                  />
                </FormControl>
                <Button
                  type="submit"
                  className={classes.submitButton}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(submit({
                      name: '', surname: '', email: '', message: '',
                    }));
                  }}
                >
                  Submit
                </Button>
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
