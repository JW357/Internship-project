/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  nav: {
    color: '#737373',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  button: {
    color: 'white',
    background: '#23A6F0',
    fontWeight: '700',
    boxSizing: 'border-box',
    padding: '13px 30px',
  },
  toolbar: {
    justifyContent: 'space-evenly',
  },
  login: {
    color: '#23A6F0',
    fontWeight: '700',
    textTransform: 'capitalize',
    marginRight: '-170px',
  },
  logo: {
    fontWeight: '700',
    marginRight: '-200px',
  },
});
