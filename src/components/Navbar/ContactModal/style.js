import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  window: {
    padding: '1rem',
    width: '30vw',
    height: '75vh',
    background: 'white',
    border: `3px solid ${theme.palette.primary.main}`,
  },

  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.5rem',
  },

  modalHeader: {
    fontSize: '1.8rem',
    margin: '1rem auto 2.5rem auto',
  },

  messageInput: {
    width: '100%',
  },

  submitButton: {
    color: 'white',
    marginTop: '2rem',
    padding: '1rem 3rem',
  },

  formControl: {
    margin: '1rem auto',
    marginRight: 'none',
  },

  inputs: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& > *': {
      margin: '0.7rem auto',
    },
  },

  buttonClose: {
    background: theme.palette.primary.main,
    padding: '0.6rem',
    '& span': {
      color: 'white',
      fontSize: '1rem',
      fontWeight: '700',
    },
  },
}));

export default useStyles;
