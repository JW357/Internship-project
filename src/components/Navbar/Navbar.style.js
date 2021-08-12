/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  navStyle: {
    color: '#737373',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  buttonStyle: {
    color: 'white',
    background: '#23A6F0',
    fontWeight: '700',
    boxSizing: 'border-box',
    padding: '13px 30px',
  },
  toolbarStyle: {
    width: '100vw',
    justifyContent: 'space-evenly',
  },
  loginStyle: {
    color: '#23A6F0',
    fontWeight: '700',
    textTransform: 'capitalize',
    marginRight: '-170px',
  },
  logoStyle: {
    fontWeight: '700',
    marginRight: '-200px',
  },
  blueElement2: {
    content: ' ',
    position: 'absolute',
    width: '1300px',
    height: '1250px',
    borderRadius: '0 0 0 10%',
    background: '#B2E3FF',
    marginLeft: '1600px',
    zIndex: '-2',
  },
});
