/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonQuote: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    border: 'none',
    textTransform: 'capitalize',
    fontWeight: '600',
    padding: '15px 50px',
    fontSize: '0.8rem',
  },
  buttonLearn: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
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
    color: theme.palette.primary.main,
    fontWeight: '700',
  },
}));
