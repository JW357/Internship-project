import { createTheme, makeStyles } from '@material-ui/core/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ],
  },
});

export const useStyles = makeStyles({
  root: {
    width: '100vw',
  },
});
