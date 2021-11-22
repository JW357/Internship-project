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
    height: '80vh',
    background: 'white',
    border: `3px solid ${theme.palette.primary.main}`,
  },

  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  inputBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.5rem',
  },

  modalHeader: {
    fontSize: '1.8rem',
    margin: '1rem auto 5rem auto',
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
    margin: '2rem auto 0 auto',
    marginRight: 'none',
  },

  inputForm: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& > *': {
      margin: '0.8rem auto',
    },
  },

  textInput: {
    position: 'relative',
    width: '30ch',
    '& p': {
      bottom: '3.7rem',
      left: '-0.9rem',
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      whiteSpace: 'noWrap',
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

  formAlert: {
    position: 'absolute',
    width: '40ch',
    top: '14rem',
  },

  formLabel: {
    textAlign: 'center',
    margin: 0,
    color: 'red',
  },
}));

export default useStyles;
