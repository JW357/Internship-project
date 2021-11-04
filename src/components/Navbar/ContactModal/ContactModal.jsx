import React from 'react';
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
              <div className={classes.inputs}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Surname" variant="outlined" />
                <TextField label="e-mail address" variant="outlined" />
                <TextField className={classes.messageInput} multiline rows={6} label="Message" variant="outlined" />
              </div>
              <FormControl className={classes.formControl}>
                <FormControlLabel
                  value="end"
                  control={<Checkbox className={classes.checkbox} color="primary" />}
                  label="I consent to the processing of my personal data"
                  labelPlacement="end"
                />
              </FormControl>
              <Button className={classes.submitButton} variant="contained" color="primary">Submit</Button>
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
