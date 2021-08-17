/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  buttonQuote: {
    color: 'white',
    backgroundColor: '#23A6F0',
    border: 'none',
    textTransform: 'capitalize',
    fontWeight: '600',
    padding: '15px 50px',
    fontSize: '0.8rem',
  },
  buttonLearn: {
    color: '#23A6F0',
    borderColor: '#23A6F0',
    marginLeft: '20px',
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: '0.8rem',
    padding: '15px 40px',
  },
  headerDescription: {
    color: '#737373',
    fontWeight: '600',
    width: '650px',
    margin: '40px auto',
  },
  header: {
    fontWeight: '700',
    textTransform: 'uppercase',
    width: '750px',
    margin: '0 auto',
  },
  joinUs: {
    margin: '150px 0 40px 0',
    color: '#23A6F0',
    fontWeight: '700',
  },
});
