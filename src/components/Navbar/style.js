/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  nav: {
    color: '#737373',
    fontWeight: '700',
    textTransform: 'capitalize',
    padding: '6px 0',
    minWidth: 0,
    width: '120px',
  },
  button: {
    color: 'white',
    background: theme.palette.primary.main,
    fontWeight: '700',
    boxSizing: 'border-box',
    padding: '13px 30px',
    marginRight: '250px',
    border: '3px solid #B2E3FF',
    boxShadow: ' 0 4px 2px -2px #A0A0A0',
  },
  toolbar: {
    justifyContent: 'space-evenly',
  },
  login: {
    color: theme.palette.primary.main,
    fontWeight: '700',
    textTransform: 'capitalize',
    left: '30px',
  },
  logo: {
    fontWeight: '700',
  },
}));
