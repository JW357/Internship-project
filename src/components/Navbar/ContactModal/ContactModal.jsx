import React from 'react';
import { useStyles } from './style';

export default function ContactModal() {
  const classes = useStyles();
  return (
  <Modal>
    <Fade>
      <div>
        <Textfield label="Name" variant="outlined" ></Textfield>
        <Textfield label="Surname" variant="outlined" ></Textfield>
        <Textfield label="e-mail address" variant="outlined" ></Textfield>
        <Textfield label="Address" variant="outlined" ></Textfield>
        <FormControl className={classes.checkbox}>
          <FormControlLabel
            value="end"
            // control={<Checkbox onChange={handleCheck} />}
            label="I consent to thw processing of my personal data"
            labelPlacement="end"
          />
        </FormControl>
        <Button variant="container">Submit</Button>
      </div>
    </Fade>
  </Modal>
  );
}
